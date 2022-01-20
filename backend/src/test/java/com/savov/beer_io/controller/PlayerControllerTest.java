package com.savov.beer_io.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.savov.beer_io.enums.PlayerRole;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.test.web.servlet.MockMvc;

import java.util.ArrayList;
import java.util.List;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class PlayerControllerTest {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private PlayerServiceImpl ps;
    @MockBean
    private BCryptPasswordEncoder pe;

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    void getAllPlayers() throws Exception {

        List<Player> players = new ArrayList<>();
        players.add(new Player(1L, "test", "test", "test", PlayerRole.USER, "test"));
        players.add(new Player(2L, "test1", "test1", "test1",PlayerRole.ADMIN, "test1" ));

        doReturn(players).when(ps).findAllPlayers();

        mvc.perform(get("/api/player/")).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$[0].id", is(1)));
    }

    @Test
    void getPlayerById() throws Exception {
        Player p1 = new Player(1L, "test", "test", "test", PlayerRole.USER, "test");
        doReturn(p1).when(ps).findPlayerById(1L);

        mvc.perform(get("/api/player/1")).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$.id", is(1)));

    }

    @Test
    void addPlayer() throws Exception {
        Player p1 = new Player(1L, "test", "test", "test", PlayerRole.USER, "test");
        doReturn(p1).when(ps).addPlayer(any());
        String json = asJsonString(p1);

        mvc.perform(post("/api/player/add")
                .contentType(MediaType.APPLICATION_JSON)
                        .content(json))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.username", is("test")));
    }

    @Test
    void updatePlayer() throws Exception {
        Player p1 = new Player(1L, "test", "test", "test", PlayerRole.USER, "test");
        Player p2 = new Player(1L, "test1", "test1", "test1",PlayerRole.ADMIN, "test1" );

        doReturn(p2).when(ps).updatePlayer(any());

        mvc.perform(put("/api/player/update").contentType(MediaType.APPLICATION_JSON).content(asJsonString(p2))).andExpect(status().isOk()).andExpect(jsonPath("$.username", is("test1")));
    }

    @Test
    void deletePlayerShouldReturn404IfPlayerDoesNotExist() throws Exception {
        doNothing().when(ps).deletePlayer(any());

        mvc.perform(delete("/api/player/delete/2")).andExpect(status().isNotFound());
    }

    @Test
    void deletePlayerShouldDeletePlayerById() throws Exception {
        Player p2 = new Player(1L, "test1", "test1", "test1",PlayerRole.ADMIN, "test1" );
        doReturn(p2).when(ps).findPlayerById(any());
        doNothing().when(ps).deletePlayer(any());



        mvc.perform(delete("/api/player/delete/1")).andExpect(status().isOk());
    }
}