package com.savov.beer_io.repo;

import com.savov.beer_io.model.Player;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;

public interface PlayerRepo extends JpaRepository<Player, Long> {
    @Transactional
    void deletePlayerById(Long id);

    Optional<Player> findPlayerById(Long id);

}
