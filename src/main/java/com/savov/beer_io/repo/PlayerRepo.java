package com.savov.beer_io.repo;

import com.savov.beer_io.player.Player;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlayerRepo extends JpaRepository<Player, Long> {
}
