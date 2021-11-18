package com.savov.beer_io.service;

import com.savov.beer_io.model.Beer;

import java.util.List;

public interface BeerService {

    Beer addBeer(Beer beer);

    List<Beer> findAllBeers();

    Beer updateBeer(Beer beer);

    Beer findBeerById(int id);

    void deleteBeer(int id);

}
