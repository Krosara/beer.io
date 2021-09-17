package com.example.beer_io.player;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collection;
import java.util.Iterator;
import java.util.List;
import java.util.ListIterator;

@RestController
@RequestMapping(path = "players")
public class PlayerController {

    @GetMapping
    public List<Player> getPlayers()
    {
        return List.of(
                new Player(
                        1L,
                        "Lebron",
                        "lebron@nba.com",
                        "testPassword",
                        "USA"
                ),
                new Player(
                        2L,
                        "Kobe",
                        "bryant@nba.com",
                        "test2Password",
                        "USA"
                )
        );
    }

    @GetMapping(path = "{id}")
    public Player GetPlayer(@PathVariable("id") long id)
    {
        for (Player p :
                getPlayers()) {
            if (p.getId() == id) {
                return p;
            }
        }
        return null;
    }



}
