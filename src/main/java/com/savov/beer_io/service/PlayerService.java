package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.PlayerNotFoundException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.repo.PlayerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlayerService {
    private final PlayerRepo playerRepo;

    @Autowired
    public PlayerService(PlayerRepo playerRepo) {
        this.playerRepo = playerRepo;
    }

    //CRUD players
    public Player addPlayer(Player player){
        return playerRepo.save(player);
    }

    public List<Player> findAllPlayers() {
        return playerRepo.findAll();
    }

    public Player updatePlayer(Player player) {
        return playerRepo.save(player);
    }

    public Player findPlayerById(Long id) {
        return playerRepo.findPlayerById(id).orElseThrow(() -> new PlayerNotFoundException("Player with id: " + id + " not found"));
    }

    public void deletePlayer(Long id) {
        playerRepo.deletePlayerById(id);
    }

}
