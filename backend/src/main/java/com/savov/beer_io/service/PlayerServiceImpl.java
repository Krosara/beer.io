package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.PlayerAlreadyExistsException;
import com.savov.beer_io.exceptions.PlayerNotFoundException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.repo.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
//@Transactional
public class PlayerServiceImpl implements PlayerService{
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerServiceImpl(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }


    public Player addPlayer(Player player) {
//        if (playerRepository.existsPlayerByUsername(player.getUsername())) {
//            throw new PlayerAlreadyExistsException("Player with username: " + player.getUsername() + " already exists!");
//        }
        return playerRepository.save(player);
    }

    public List<Player> findAllPlayers() {
        return playerRepository.findAll();
    }

    public Player updatePlayer(Player player){
        return playerRepository.save(player);
    }

    public Player findPlayerById(int id) {
        return playerRepository.findPlayerById(id).orElseThrow(() -> new PlayerNotFoundException("Player with ID:" + id + " not found"));
    }

    public void deletePlayer(int id){
        Player player = playerRepository.findPlayerById(id).orElseThrow(() -> new PlayerNotFoundException("Player with ID:" + id + " not found"));

        playerRepository.delete(player);
    }
}
