package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.PlayerNotFoundException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.repo.PlayerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class PlayerService implements UserDetailsService {
    private static String PLAYER_NOT_FOUND = "Player with email %s not found";
    private final PlayerRepository playerRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

//    @Autowired
//    public PlayerService(PlayerRepository playerRepository) {
//        this.playerRepository = playerRepository;
//    }

    //CRUD players
//    public Player addPlayer(Player player){
//        return playerRepo.save(player);
//    }
//
//    public List<Player> findAllPlayers() {
//        return playerRepo.findAll();
//    }
//
//    public Player updatePlayer(Player player) {
//        return playerRepo.save(player);
//    }

//    public Player findPlayerByEmail(String email) {
//        return playerRepo.findPlayerByEmail(email).orElseThrow(() -> new PlayerNotFoundException(String.format(PLAYER_NOT_FOUND, email)));
//    }

//    public void deletePlayer(Long id) {
//        playerRepo.deletePlayerById(id);
//    }

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException
    {
        return playerRepository.findPlayerByEmail(email).orElseThrow(() -> new PlayerNotFoundException(String.format(PLAYER_NOT_FOUND, email)));
    }

    public String signUpPlayer(Player player) {
        boolean playerExists = playerRepository
                .findPlayerByEmail(player.getEmail())
                .isPresent();

        if (playerExists) {
            throw new IllegalStateException("Email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder.encode(player.getPassword());

        player.setPassword(encodedPassword);

        playerRepository.save(player);

        return "password works";
    }
}
