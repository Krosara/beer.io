package com.savov.beer_io.repo;

import com.savov.beer_io.model.Beer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@DataJpaTest
class BeerRepositoryTest {

    @Autowired
    private BeerRepository _beerRepository;
    static int id = 0;
    @BeforeEach
    void clean() {
        _beerRepository.deleteAll();
    }

    @Test
    void itShouldDeleteBeerById() {
        //Arrange
        id++;
        Beer beer = new Beer(
                id,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );
        _beerRepository.save(beer);
        int countBefore = _beerRepository.findAll().size();
        //Act
        _beerRepository.deleteById(beer.getId());
        int countAfter = _beerRepository.findAll().size();
        //Assert
        assertThat(countBefore).isEqualTo(1);
        assertThat(countAfter).isEqualTo(0);
    }

    @Test
    void itShouldDeleteTheCorrectBeerById() {
        //Arrange
        id++;
        Beer b1 = new Beer(
                id,
                "Staropramen",
                "Pilsner",
                "Czechia"
        );

        id++;
        Beer b2 = new Beer(
                id,
                "Kamenitza",
                "Pilsner",
                "Bulgaria"
        );

        _beerRepository.save(b1);
        _beerRepository.save(b2);

        //Act
        _beerRepository.deleteById(b1.getId());
        Boolean b1Exist = _beerRepository.existsById(b1.getId());
        Boolean b2Exist = _beerRepository.existsById(b2.getId());
        //Assert
        assertThat(b1Exist).isFalse();
        assertThat(b2Exist).isTrue();
    }

}