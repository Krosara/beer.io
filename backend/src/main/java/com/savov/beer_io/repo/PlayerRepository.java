package com.savov.beer_io.repo;

import com.savov.beer_io.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PlayerRepository extends JpaRepository<Player, Long> {

    void deleteById(Long id);

    Optional<Player> findPlayerById(Long id);

    Player findPlayerByUsername(String username);

    Boolean existsPlayerByUsername(String username);

    Boolean existsPlayerByEmail(String email);
}
