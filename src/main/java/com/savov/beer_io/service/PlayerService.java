package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.PlayerNotFoundException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.repo.PlayerRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Service
@Transactional
public class PlayerService {
    private final PlayerRepository playerRepository;

    @Autowired
    public PlayerService(PlayerRepository playerRepository) {
        this.playerRepository = playerRepository;
    }


    public Player addPlayer(Player player){
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
        playerRepository.deletePlayerById(id);
    }
}
