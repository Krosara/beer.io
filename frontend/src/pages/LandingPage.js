import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';

const ENDPOINT = 'http://localhost:8080/beer-chat';

export const LandingPage = () => {
  const [messages, setMessages] = useState([]);

  const [stompClient, setStompClient] = useState(null);
  const [msgToSend, setSendMessage] = useState('Enter your message here!');

  useEffect(() => {
    const socket = SockJS(ENDPOINT);
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages', (data) => {
        console.log(data);
        onMessageReceived(data);
      });
    });
    setStompClient(stompClient);
  }, []);

  const sendMessage = () => {
    stompClient.send(
      '/app/message',
      {},
      JSON.stringify({ messageContent: msgToSend })
    );
  };

  const onMessageReceived = (data) => {
    const result = JSON.parse(data.body);
    alert(result.content);
  };

  // const sock = new SockJS('http://localhost:8080/beer-chat');

  // sock.onopen = () => {
  //   console.log('connection open');
  // };

  // sock.onmessage = (e) => {
  //   setMessages([e.data, ...messages]);
  // };

  // sock.onclose = () => {
  //   console.log('connection closed');
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(e.target[0].value);
  //   sock.send(e.target[0].value);
  // };

  // const onConnected = () => {
  //   console.log('connected');
  // };

  // const onMessageReceived = (msg) => {
  //   setMessages(msg.message);
  // };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Send</button>
      </form>
      {messages.map((message, index) => {
        return <div key={index}>{message}</div>;
      })} */}
      <input
        type="text"
        onChange={(event) => setSendMessage(event.target.value)}
      />
      <button onClick={sendMessage}>Send message</button>
    </div>
  );
};
