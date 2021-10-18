package com.savov.beer_io.repo;

import com.savov.beer_io.model.Beer;
import org.junit.Before;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.event.annotation.BeforeTestMethod;
import org.springframework.test.context.jdbc.Sql;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@DataJpaTest
class BeerRepositoryTest {

    @Autowired
    private BeerRepository _beerRepository;

    @BeforeEach
    void clean() {
        _beerRepository.deleteAll();
    }

    @Test
    void itShouldDeleteBeerById() {
        //Arrange
        Beer beer = new Beer(
                1,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );
        _beerRepository.save(beer);
        int countBefore = _beerRepository.findAll().size();
        //Act
        _beerRepository.deleteById(1);
        int countAfter = _beerRepository.findAll().size();
        //Assert
        assertThat(countBefore).isEqualTo(1);
        assertThat(countAfter).isEqualTo(0);
    }

    @Test
    void itShouldDeleteTheCorrectPlayerById() {
        //Arrange
        Beer beer = new Beer(
                1,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );
        _beerRepository.save(beer);
        Beer beer1 = new Beer(
                2,
                "Kamenitza",
                "Pilsner",
                "Bulgaria"
        );
        _beerRepository.save(beer1);

        //Act
        _beerRepository.deleteById(1);
        Boolean b1Exist = _beerRepository.existsById(1);
        Boolean b2Exist = _beerRepository.existsById(2);
        //Assert
        assertThat(b1Exist).isFalse();
        assertThat(b2Exist).isTrue();
    }

}