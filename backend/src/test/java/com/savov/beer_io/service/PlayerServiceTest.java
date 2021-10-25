package com.savov.beer_io.service;

import com.savov.beer_io.enums.PlayerRole;
import com.savov.beer_io.exceptions.PlayerAlreadyExistsException;
import com.savov.beer_io.exceptions.PlayerNotFoundException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.repo.PlayerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class PlayerServiceTest {

    @Mock
    private PlayerRepository playerRepository;
    private PlayerService _ps;

    @BeforeEach
    void setUp() {
        _ps = new PlayerService(playerRepository);
    }

    @Test
    void addPlayer() throws PlayerAlreadyExistsException {
        //Arrange
        Player p1 = new Player(
                1,
                "Player1",
                "player1@gmail.com",
                "UK",
                PlayerRole.USER,
                10L
        );
        //Act
        _ps.addPlayer(p1);
        //Assert
        verify(playerRepository).save(p1);
    }

    @Test
    void findAllPlayers() {
        //Act
        _ps.findAllPlayers();
        //Assert
        verify(playerRepository).findAll();
    }

    @Test
    void updatePlayer() {
        //Arrange
        Player p1 = new Player(
                1,
                "Player1",
                "player1@gmail.com",
                "UK",
                PlayerRole.USER,
                10L
        );
        //Act
        _ps.updatePlayer(p1);
        //Assert
        verify(playerRepository).save(p1);
    }

    @Test
    @Disabled
    void findPlayerById() throws PlayerNotFoundException{
        //Arrange
        Player p1 = new Player(
                1,
                "Player1",
                "player1@gmail.com",
                "UK",
                PlayerRole.USER,
                10L
        );
        //Act
        _ps.findPlayerById(anyInt());
        //Assert
        verify(playerRepository).findById(anyInt());
    }

    @Test
    void deletePlayer() {
        //Act
        _ps.deletePlayer(1);
        //Assert
        verify(playerRepository).deleteById(1);
    }
}