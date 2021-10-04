package com.savov.beer_io.repo;

import com.savov.beer_io.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Integer> {

    void deletePlayerById(int id);

    Optional<Player> findPlayerById(int id);
}
