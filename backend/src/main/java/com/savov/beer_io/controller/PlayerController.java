package com.savov.beer_io.controller;

import com.savov.beer_io.dto.PlayerDTO;
import com.savov.beer_io.exceptions.PlayerAlreadyExistsException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerService;
import com.savov.beer_io.service.PlayerServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/player")
@CrossOrigin("http://localhost:3000/")
public class PlayerController {

    @Autowired
    private ModelMapper modelMapper;

    private final PlayerService playerService;

    public PlayerController(PlayerServiceImpl playerService){
        this.playerService = playerService;
    }

    @GetMapping
    public List<PlayerDTO> getAllPlayers() {

        return playerService.findAllPlayers().stream().map(player -> modelMapper.map(player, PlayerDTO.class)).toList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerDTO> getPlayerById (@PathVariable("id") int id) {
        Player player = playerService.findPlayerById(id);
        PlayerDTO playerDTO = modelMapper.map(player, PlayerDTO.class);
        return ResponseEntity.ok().body(playerDTO);
    }

    @PostMapping("/add")
    public ResponseEntity<PlayerDTO> addPlayer(@RequestBody PlayerDTO playerDto)
    {
            Player request = modelMapper.map(playerDto, Player.class);
            Player player = playerService.addPlayer(request);
            PlayerDTO response = modelMapper.map(player, PlayerDTO.class);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<PlayerDTO> updatePlayer(@RequestBody PlayerDTO playerDto) {
        Player request = modelMapper.map(playerDto, Player.class);
        Player player = playerService.updatePlayer(request);
        PlayerDTO response = modelMapper.map(player, PlayerDTO.class);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePlayer(@PathVariable("id") int id) {

        Player result = playerService.findPlayerById(id);

        if (result == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
