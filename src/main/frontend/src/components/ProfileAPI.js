import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Players = () => {
  const [players, setPlayer] = useState([]);

  const fetchPlayers = () => {
    axios.get('http://localhost:8080/api/player/').then((res) => {
      console.log(res);
      setPlayer(res.data);
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  return players.map((player, index) => {
    return (
      <div>
        <h1>{player.username}</h1>
      </div>
    );
  });
};

export default Players;
