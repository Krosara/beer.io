package com.savov.beer_io.controller;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RestController
//@RequestMapping(path = "api/v1/player")
public class PlayerController {

    private final PlayerService playerService;

    @Autowired
    public PlayerController(PlayerService playerService) {
        this.playerService = playerService;
    }

//    @GetMapping("/all")
//    public ResponseEntity<List<Player>> getAllPlayers()
//    {
//        List<Player> players = playerService.findAllPlayers();
//        return new ResponseEntity<>(players, HttpStatus.OK);
//        return List.of(
//                new Player(
//                        1L,
//                        "Lebron",
//                        "lebron@nba.com",
//                        "testPassword",
//                        "USA"
//                ),
//                new Player(
//                        2L,
//                        "Kobe",
//                        "bryant@nba.com",
//                        "test2Password",
//                        "USA"
//                )
//        );
//    }

    @GetMapping("/find/{email}")
    public ResponseEntity<Player> getPlayerById(@PathVariable("email") String email)
    {
        Player player = (Player) playerService.loadUserByUsername(email);
        return new ResponseEntity<>(player, HttpStatus.OK);
//        for (Player p :
//                getPlayers()) {
//            if (p.getId() == id) {
//                return p;
//            }
//        }
//        return null;
    }

//    @PostMapping("/add")
//    public ResponseEntity<Player> addPlayer(@RequestBody Player player)
//    {
//        Player newPlayer = playerService.addPlayer(player);
//        return new ResponseEntity<>(newPlayer, HttpStatus.CREATED);
//    }
//
//    @PutMapping("/update")
//    public ResponseEntity<Player> updatePlayer(@RequestBody Player player)
//    {
//        Player updatePlayer = playerService.updatePlayer(player);
//        return new ResponseEntity<>(updatePlayer, HttpStatus.OK);
//    }
//
//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deletePlayer(@PathVariable("id") Long id)
//    {
//        playerService.deletePlayer(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

}
