package com.savov.beer_io.repo;

import com.savov.beer_io.enums.PlayerRole;
import com.savov.beer_io.model.Beer;
import com.savov.beer_io.model.Player;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@DataJpaTest
class PlayerRepositoryTest {

    @Autowired
    private PlayerRepository _playerRepository;
    static Long id = 0L;
    @BeforeEach
    void clean() {
        _playerRepository.deleteAll();
    }

    @Test
    void itShouldDeletePlayerById() {
        //Arrange
        id++;
        Player player = new Player(
                id,
                "Player1",
                "Player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );
        _playerRepository.save(player);
        int countBefore = _playerRepository.findAll().size();
        //Act
        _playerRepository.deleteById(player.getId());
        int countAfter = _playerRepository.findAll().size();
        //Assert
        assertThat(countBefore).isEqualTo(1);
        assertThat(countAfter).isEqualTo(0);
    }

    @Test
    void itShouldDeleteTheCorrectPlayerById() {
        //Arrange
        id++;
        Player p1 = new Player(
                id,
                "Player1",
                "Player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );

        id++;
        Player p2 = new Player(
                id,
                "Player2",
                "Player2@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );

        _playerRepository.save(p1);
        _playerRepository.save(p2);
        //Act
        _playerRepository.deleteById(p1.getId());
        Boolean p1Exist = _playerRepository.existsById(p1.getId());
        Boolean p2Exist = _playerRepository.existsById(p2.getId());
        //Assert
        assertThat(p1Exist).isFalse();
        assertThat(p2Exist).isTrue();
    }

    @Test
    void itShouldFindPlayerById() {
        //Arrange
        id++;
        Player p1 = new Player(
                id,
                "Player1",
                "Player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );

        id++;
        Player p2 = new Player(
                id,
                "Player2",
                "Player2@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );
        _playerRepository.save(p1);
        _playerRepository.save(p2);
        //Act
        Optional<Player> result = _playerRepository.findPlayerById(p1.getId());

        //Assert
        assertThat(result).isPresent();

    }

    @Test
    void itShouldFindNothingIfPlayerDoesntExist() {
        //Arrange
        id++;
        Player p1 = new Player(
                id,
                "Player1",
                "Player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );

        id++;
        Player p2 = new Player(
                id,
                "Player2",
                "Player2@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );
        _playerRepository.save(p1);
        _playerRepository.save(p2);
        //Act
        Optional<Player> result = _playerRepository.findPlayerById(p2.getId()+1);

        //Assert
        assertThat(result).isNotPresent();

    }

    @Test
//    @Disabled
    void itShouldCheckIfPlayerEmailExists() {
        //Arrange
        String username = "Player1";
        Player p = new Player(
                id,
                "Player1",
                "Player1@gmail.com",
                "test",
                PlayerRole.USER,
                "UK"
        );
        _playerRepository.save(p);
        //Act
        boolean expected = _playerRepository.existsPlayerByUsername(username);
        //Assert
        assertThat(expected).isTrue();
    }

    @Test
    void itShouldCheckIfBeerBrandNameDoesNotExist() {
        //Arrange
        String username = "player1";
        //Act
        boolean expected = _playerRepository.existsPlayerByUsername(username);
        //Assert
        assertThat(expected).isFalse();
    }
}