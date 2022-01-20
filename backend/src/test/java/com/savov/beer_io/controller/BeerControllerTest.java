package com.savov.beer_io.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.savov.beer_io.model.Beer;
import com.savov.beer_io.service.BeerServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.is;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.doReturn;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc(addFilters = false)
class BeerControllerTest {

    @Autowired
    private MockMvc mvc;
    @MockBean
    private BeerServiceImpl bs;

    public static String asJsonString(final Object obj) {
        try {
            return new ObjectMapper().writeValueAsString(obj);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    void getAllBeers() throws Exception{
        List<Beer> beers = new ArrayList<>();
        Beer b1 = new Beer(1L, "test", "test", "test");
        Beer b2 = new Beer(2L, "test1", "test1", "test1");
        beers.add(b1);
        beers.add(b2);
        doReturn(beers).when(bs).findAllBeers();

        mvc.perform(get("/api/beer/")).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$[0].id", is(1)));
    }

    @Test
    void getBeerById() throws Exception {
        Beer b1 = new Beer(1L, "test", "test", "test");
        doReturn(b1).when(bs).findBeerById(1L);

        mvc.perform(get("/api/beer/1")).andExpect(status().isOk()).andExpect(content().contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$.id", is(1)));
    }

    @Test
    void addBeer() throws Exception{
        Beer b1 = new Beer(1L, "test", "test", "test");
        doReturn(b1).when(bs).addBeer(any());
        String json = asJsonString(b1);

        mvc.perform(post("/api/beer/add").contentType(MediaType.APPLICATION_JSON).content(json)).andExpect(status().isCreated()).andExpect(content().contentType(MediaType.APPLICATION_JSON)).andExpect(jsonPath("$.brandName", is("test")));
    }

    @Test
    void updateBeer() throws Exception {
        Beer b1 = new Beer(1L, "test", "test", "test");
        doReturn(b1).when(bs).updateBeer(any());

        mvc.perform(put("/api/beer/update").contentType(MediaType.APPLICATION_JSON).content(asJsonString(b1))).andExpect(status().isOk()).andExpect(jsonPath("$.brandName", is("test")));
    }

    @Test
    void deleteBeerShouldReturn404IfBeerDoesNotExist() throws Exception {
        doNothing().when(bs).deleteBeer(any());
        mvc.perform(delete("/api/beer/delete/2")).andExpect(status().isNotFound());
    }

    @Test
    void deleteBeerShouldDeleteBeerById() throws Exception {
        Beer b1 = new Beer(1L, "test", "test", "test");
        doReturn(b1).when(bs).findBeerById(any());
        doNothing().when(bs).deleteBeer(any());

        mvc.perform(delete("/api/beer/delete/1")).andExpect(status().isOk());
    }
}