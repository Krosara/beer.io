package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.BeerAlreadyExistsException;
import com.savov.beer_io.exceptions.BeerNotFoundException;
import com.savov.beer_io.model.Beer;
import com.savov.beer_io.repo.BeerRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BeerServiceTest {

    @Mock
    private BeerRepository beerRepository;
    private BeerService _bs;

    @BeforeEach
    void setUp() {
        _bs = new BeerService(beerRepository);
    }

    @Test
    void addBeer() throws BeerAlreadyExistsException{
        //Arrange
        Beer b1 = new Beer(
                1,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );
        //Act
        _bs.addBeer(b1);
        //Assert
        verify(beerRepository).save(b1);
    }

    @Test
    void findAllBeers() {
        //Act
        _bs.findAllBeers();
        //Assert
        verify(beerRepository).findAll();
    }

    @Test
    void updateBeer() {
        Beer b = new Beer(
                1,
                "PilsnerUrquel",
                "Pilsner",
                "Czechia"
        );
        //Act
        _bs.updateBeer(b);
        //Assert
        verify(beerRepository).save(b);
    }

    @Test
    @Disabled
    void findBeerById() throws BeerNotFoundException, BeerAlreadyExistsException {
        //Arrange
        Beer b1 = new Beer(
                1,
                "PilsnerUrquel",
                "Pilsner",
                "Czechia"
        );
        _bs.addBeer(b1);
        //Act
        _bs.findBeerById(b1.getId());
        //Assert
        verify(beerRepository).findById(anyInt());
    }

    @Test
    void deleteBeer() {
        //Act
        _bs.deleteBeer(1);
        //Assert
        verify(beerRepository).deleteById(1);
    }
}