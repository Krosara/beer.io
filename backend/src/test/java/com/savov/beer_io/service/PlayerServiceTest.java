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
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
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
    @Mock
    private PasswordEncoder passwordEncoder;
    private PlayerServiceImpl _ps;

    @BeforeEach
    void setUp() {
        _ps = new PlayerServiceImpl(playerRepository, passwordEncoder);
    }

    @Test
    void canAddPlayer() {
        //Arrange
        Player p1 = new Player(
                1L,
                "Player1",
                "player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
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
//    @Disabled
    void addPlayerWillReturnNullIfUsernameIsTaken(){
        //Arrange
        Player p1 = new Player(
                1L,
                "Player1",
                "player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );
        given(playerRepository.existsPlayerByUsername(p1.getUsername())).willReturn(true);
        //Assert
        assertThat(_ps.addPlayer(p1)).isNull();

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
                1L,
                "Player1",
                "player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
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
                1L,
                "Player1",
                "player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );

        _ps.addPlayer(p1);
        ArgumentCaptor<Player> playerArgumentCaptor = ArgumentCaptor.forClass(Player.class);
        verify(playerRepository).save(playerArgumentCaptor.capture());
        Player capturedPlayer = playerArgumentCaptor.getValue();
        when(playerRepository.findPlayerById(1L)).thenReturn(Optional.of(p1));
        //Act
        Player result = _ps.findPlayerById(1L);
        //Assert
        assertThat(capturedPlayer).isEqualTo(result);
    }

    @Test
    @Disabled
    void shouldDeletePlayerWhenGivenAnId() {
        //Arrange
        Player p1 = new Player(
                100L,
                "Player123",
                "player123@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );
        _ps.addPlayer(p1);
//        List<Player> all = _ps.findAllPlayers();
        _ps.deletePlayer(1L);
        verify(playerRepository, times(1)).deleteById(p1.getId());
    }


}