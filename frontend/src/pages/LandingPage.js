import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const ENDPOINT = 'http://localhost:8080/beer-chat';

export const LandingPage = () => {
  const [sentMessages, setSentMessages] = useState([]);
  const [receivedMessages, setReceivedMessages] = useState([]);

  const [stompClient, setStompClient] = useState(null);
  const [msgToSend, setMsgToSend] = useState('');

  useEffect(() => {
    const socket = SockJS(ENDPOINT);
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages', (data) => {
        onMessageReceived(data);
      });
    });
    setStompClient(stompClient);
  }, []);

  const sendMessage = () => {
    setSentMessages(msgToSend);
    stompClient.send(
      '/app/message',
      {},
      JSON.stringify({ messageContent: msgToSend })
    );
  };

  const onMessageReceived = (data) => {
    const result = JSON.parse(data.body);
    console.log(result);
    setReceivedMessages(receivedMessages.concat(result.content));
  };

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setMsgToSend(event.target.value)}
      />
      <button onClick={sendMessage}>Send message</button>
      <div>{sentMessages} sent</div>

      <h1 className="text-red-500">{receivedMessages}</h1>
    </div>
  );
};
