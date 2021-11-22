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
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class PlayerServiceTest {

    @Mock
    private PlayerRepository playerRepository;
    private PlayerServiceImpl _ps;

    @BeforeEach
    void setUp() {
        _ps = new PlayerServiceImpl(playerRepository);
    }

    @Test
    void canAddPlayer() throws PlayerAlreadyExistsException {
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
        ArgumentCaptor<Player> playerArgumentCaptor = ArgumentCaptor.forClass(Player.class);
        verify(playerRepository).save(playerArgumentCaptor.capture());
        Player capturedPlayer = playerArgumentCaptor.getValue();
        assertThat(capturedPlayer).isEqualTo(p1);
    }

    @Test
    @Disabled
    void addPlayerWillThrowWhenUsernameIsTaken(){
        //Arrange
        Player p1 = new Player(
                1,
                "Player1",
                "player1@gmail.com",
                "UK",
                PlayerRole.USER,
                10L
        );
        given(playerRepository.existsPlayerByUsername(p1.getUsername())).willReturn(true);
        //Assert
        assertThatThrownBy(() -> _ps.addPlayer(p1)).isInstanceOf(PlayerAlreadyExistsException.class).hasMessageContaining("Player with username: " + p1.getUsername() + " already exists!");

        verify(playerRepository, never()).save(any());
    }


    @Test
    void canFindAllPlayers() {
        //Act
        _ps.findAllPlayers();
        //Assert
        verify(playerRepository).findAll();
    }

    @Test
    void canUpdatePlayer() {
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
    void canFindPlayerById() throws PlayerAlreadyExistsException, PlayerNotFoundException{
        //Arrange
        Player p1 = new Player(
                1,
                "Player1",
                "player1@gmail.com",
                "UK",
                PlayerRole.USER,
                10L
        );

        _ps.addPlayer(p1);
        ArgumentCaptor<Player> playerArgumentCaptor = ArgumentCaptor.forClass(Player.class);
        verify(playerRepository).save(playerArgumentCaptor.capture());
        Player capturedPlayer = playerArgumentCaptor.getValue();
        when(playerRepository.findPlayerById(1)).thenReturn(Optional.of(p1));
        //Act
        Player result = _ps.findPlayerById(1);
        //Assert
        assertThat(capturedPlayer).isEqualTo(result);
    }

    @Test
    @Disabled
    void canDeletePlayer() {
        //Act
        _ps.deletePlayer(1);
        //Assert
        verify(playerRepository).deleteById(1);
    }


}