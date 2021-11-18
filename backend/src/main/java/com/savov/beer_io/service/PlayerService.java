package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.PlayerAlreadyExistsException;
import com.savov.beer_io.model.Player;

import java.util.List;

public interface PlayerService {
    Player addPlayer(Player player);

    List<Player> findAllPlayers();

    Player updatePlayer(Player player);

    Player findPlayerById(int id);

    void deletePlayer(int id);


}
