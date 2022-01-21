package com.savov.beer_io.controller;

import com.savov.beer_io.dto.PlayerDTO;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerService;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RequiredArgsConstructor
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/player")
public class PlayerController {

    @Autowired
    private ModelMapper modelMapper;

    private final PlayerService playerService;

    @GetMapping
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok().body(playerService.findAllPlayers().stream().map(player -> modelMapper.map(player, PlayerDTO.class)).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerDTO> getPlayerById (@PathVariable("id") Long id) {
        Player player = playerService.findPlayerById(id);
        PlayerDTO playerDTO = modelMapper.map(player, PlayerDTO.class);
        return ResponseEntity.ok().body(playerDTO);
    }

    @GetMapping("/name/{username}")
    public ResponseEntity<PlayerDTO> getPlayerByUsername (@PathVariable("username") String username) {
        Player player = playerService.findPlayerByUsername(username);
        PlayerDTO playerDTO = modelMapper.map(player, PlayerDTO.class);
        return ResponseEntity.ok().body(playerDTO);
    }

    @PostMapping("/add")
    public ResponseEntity<PlayerDTO> addPlayer(@RequestBody PlayerDTO playerDto)
    {
            Player request = modelMapper.map(playerDto, Player.class);
            Player player = playerService.addPlayer(request);
            if (player == null){
                return ResponseEntity.badRequest().body(null);
            }
            PlayerDTO response = modelMapper.map(player, PlayerDTO.class);
            return new ResponseEntity<PlayerDTO>(response, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<PlayerDTO> updatePlayer(@RequestBody PlayerDTO playerDto) {
        Player request = modelMapper.map(playerDto, Player.class);
        Player player = playerService.updatePlayer(request);
        PlayerDTO response = modelMapper.map(player, PlayerDTO.class);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deletePlayer(@PathVariable("id") Long id) {

        Player result = playerService.findPlayerById(id);

        if (result == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);

    }

}
