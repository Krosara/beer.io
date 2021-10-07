package com.savov.beer_io.controller;

import com.savov.beer_io.Application;
import com.savov.beer_io.repo.PlayerRepository;
import com.savov.beer_io.service.PlayerService;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import javax.annotation.sql.DataSourceDefinition;

import static org.junit.jupiter.api.Assertions.assertEquals;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class PlayerControllerTest {

    @Autowired
    private MockMvc _mvc;

//    @Autowired
//    private PlayerRepository _repository;

    @Test
    public void getAllPlayers() throws Exception {
        RequestBuilder request = MockMvcRequestBuilders.get("/api/player");
        MvcResult result = _mvc.perform(request).andReturn();
        assertEquals(HttpStatus.OK.value(), result.getResponse().getStatus());
    }

//    @Test
//    void getPlayerById() {
//    }
//
//    @Test
//    void addPlayer() {
//    }
//
//    @Test
//    void updatePlayer() {
//    }
//
//    @Test
//    void deletePlayer() {
//    }
}