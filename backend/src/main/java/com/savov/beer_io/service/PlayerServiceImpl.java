package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.PlayerNotFoundException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.repo.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;


@Service
@Transactional
public class PlayerServiceImpl implements PlayerService, UserDetailsService {
    private final PlayerRepository playerRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public PlayerServiceImpl(PlayerRepository playerRepository, PasswordEncoder passwordEncoder) {
        this.playerRepository = playerRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        Player player = playerRepository.findPlayerByUsername(username);
        if (player == null){
            throw new UsernameNotFoundException("User not found");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(player.getRole().toString()));
        return new User(player.getUsername(), player.getPassword(), authorities);
    }

    public Player addPlayer(Player player) {
        if (playerRepository.existsPlayerByUsername(player.getUsername()) || playerRepository.existsPlayerByEmail(player.getEmail())){
            return null;
        }
        player.setPassword(passwordEncoder.encode(player.getPassword()));
        return playerRepository.save(player);
    }

    public List<Player> findAllPlayers() {
        return playerRepository.findAll();
    }

    public Player updatePlayer(Player player){
        return playerRepository.save(player);
    }

    public Player findPlayerById(Long id) {
        return playerRepository.findPlayerById(id).orElseThrow(() -> new PlayerNotFoundException("Player with ID:" + id + " not found"));
    }

    public void deletePlayer(Long id){
        Player player = playerRepository.findPlayerById(id).orElseThrow(() -> new PlayerNotFoundException("Player with ID:" + id + " not found"));

        playerRepository.delete(player);
    }

    public Player findPlayerByUsername(String username){
        return playerRepository.findPlayerByUsername(username);
    }

}
