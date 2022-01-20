import React, { useState, useEffect, useContext } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Cookies from 'js-cookie';
import AuthContext from '../context/AuthContext';
import TextField from '../components/TextField/TextField';
const ENDPOINT = 'http://localhost:8080/beer-chat';

export const LandingPage = () => {
  const { user } = useContext(AuthContext);

  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);

  const sent = [];
  const received = [];

  const [stompClient, setStompClient] = useState(null);
  const [msgToSend, setMsgToSend] = useState('');

  useEffect(() => {
    const socket = SockJS(ENDPOINT);
    const stompClient = Stomp.over(socket);
    // const cookies = Cookies.get('access_token').slice(1, -1);
    stompClient.connect(
      {
        // Authorization: `Bearer ${cookies}`,
      },
      () => {
        stompClient.subscribe('/topic/messages', (data) => {
          onMessageReceived(data);
        });
      }
    );
    setStompClient(stompClient);
  }, []);

  const sendMessage = () => {
    setSentMessages((old) => [...old, msgToSend]);
    // sent.push(msgToSend);
    stompClient.send(
      '/app/message',
      {},
      JSON.stringify({ messageContent: msgToSend, user: user.sub })
    );
  };

  const onMessageReceived = (data) => {
    const result = JSON.parse(data.body);
    if (result.user !== user.sub) {
      setReceivedMessages((old) => [...old, result]);
    }
    // received.push(result.content);
  };

  return (
    <div>
      <div className="text-center bg-btngreen-default w-592 filter drop-shadow-normal text-offwhite align-middle mx-auto xs:w-full xs:h-full pt-16 xs:mt-16 h-740">
        {receivedMessages.map((msg, id) => {
          return (
            <div key={id}>
              Received: {msg.content} from {msg.user}
            </div>
          );
        })}
        {sentMessages.map((msg, id) => {
          return <div key={id}>Sent: {msg}</div>;
        })}
        <TextField
          type="text"
          id="username"
          name="username"
          value={msgToSend}
          onChange={(event) => {
            setMsgToSend(event.target.value);
          }}
          placeholder="Write a message!"
        />
        <button
          onClick={() => {
            console.log(receivedMessages);
            sendMessage();
            setMsgToSend('');
          }}
        >
          Send message
        </button>
      </div>
    </div>
  );
};
