package com.savov.beer_io.controller;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.savov.beer_io.dto.PlayerDTO;
import com.savov.beer_io.enums.PlayerRole;
import com.savov.beer_io.exceptions.PlayerAlreadyExistsException;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerService;
import com.savov.beer_io.service.PlayerServiceImpl;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.*;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;


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
    public ResponseEntity<List<PlayerDTO>> getAllPlayers() {
        return ResponseEntity.ok().body(playerService.findAllPlayers().stream().map(player -> modelMapper.map(player, PlayerDTO.class)).toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<PlayerDTO> getPlayerById (@PathVariable("id") Long id) {
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

    @GetMapping("/token/refresh")
    public void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("beerSecret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                Player player = playerService.findPlayerByUsername(username);
                String access_token = JWT.create()
                        .withSubject(player.getUsername())
                        .withExpiresAt(new Date(System.currentTimeMillis() + 10*60*1000))
                        .withIssuer(request.getRequestURL().toString())
                        .withClaim("role", player.getRole().toString())
                        .sign(algorithm);
                Map<String, String> tokens = new HashMap<>();
                tokens.put("access_token", access_token);
                tokens.put("refresh_token", refresh_token);
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), tokens);
            } catch (Exception e) {
                System.out.println(e.toString());
                response.setHeader("error", e.getMessage());
                response.setStatus(FORBIDDEN.value());
                //response.sendError(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                error.put("error_message", e.getMessage());
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        } else {
            throw new RuntimeException("Refresh token is missing");
        }

    }
}
