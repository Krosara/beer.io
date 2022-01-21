package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.BeerAlreadyExistsException;
import com.savov.beer_io.exceptions.BeerNotFoundException;
import com.savov.beer_io.model.Beer;
import com.savov.beer_io.repo.BeerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BeerServiceTest {

    @Mock
    private BeerRepository beerRepository;
    private BeerServiceImpl _bs;

    @BeforeEach
    void setUp() {
        _bs = new BeerServiceImpl(beerRepository);
    }

    @Test
    void canAddBeer() {
        //Arrange
        Beer b1 = new Beer(
                1L,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );
        //Act
        _bs.addBeer(b1);
        //Assert
        ArgumentCaptor<Beer> beerArgumentCaptor = ArgumentCaptor.forClass(Beer.class);
        verify(beerRepository).save(beerArgumentCaptor.capture());
        Beer capturedBeer = beerArgumentCaptor.getValue();
        assertThat(capturedBeer).isEqualTo(b1);
    }

    @Test
    void addBeer() {
        //Arrange
        Beer b1 = new Beer(
                1L,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );
        //Act
        _bs.addBeer(b1);
        //Assert
        ArgumentCaptor<Beer> beerArgumentCaptor = ArgumentCaptor.forClass(Beer.class);
        verify(beerRepository).save(beerArgumentCaptor.capture());
        Beer capturedBeer = beerArgumentCaptor.getValue();
        assertThat(capturedBeer).isEqualTo(b1);
    }

    @Test
    void canFindAllBeers() {
        //Act
        _bs.findAllBeers();
        //Assert
        verify(beerRepository).findAll();
    }

    @Test
    void canUpdateBeer() {
        Beer b = new Beer(
                1L,
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
    void canFindBeerById() throws BeerNotFoundException {
        //Arrange
        Beer b1 = new Beer(
                1L,
                "PilsnerUrquel",
                "Pilsner",
                "Czechia"
        );
        _bs.addBeer(b1);
        ArgumentCaptor<Beer> beerArgumentCaptor = ArgumentCaptor.forClass(Beer.class);
        verify(beerRepository).save(beerArgumentCaptor.capture());
        Beer capturedBeer = beerArgumentCaptor.getValue();
        when(beerRepository.findBeerById(1L)).thenReturn(Optional.of(b1));
        //Act
        Beer result = _bs.findBeerById(1L);
        //Assert
        assertThat(capturedBeer).isEqualTo(result);
    }

    @Test
    @Disabled
    void canDeleteBeer() {
        //Arrange
        Beer b1 = new Beer(
                1L,
                "PilsnerUrquel",
                "Pilsner",
                "Czechia"
        );
        _bs.addBeer(b1);
        ArgumentCaptor<Beer> beerArgumentCaptor = ArgumentCaptor.forClass(Beer.class);
        verify(beerRepository).save(beerArgumentCaptor.capture());
        Beer capturedBeer = beerArgumentCaptor.getValue();
        when(beerRepository.findBeerById(1L)).thenReturn(Optional.of(b1));
        //Act
        _bs.deleteBeer(1L);
        //Assert
        verify(beerRepository).deleteById(1L);
    }

}