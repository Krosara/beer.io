package com.savov.beer_io.repo;

import com.savov.beer_io.model.Beer;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import static org.assertj.core.api.AssertionsForInterfaceTypes.assertThat;

@DataJpaTest
class BeerRepositoryTest {

    @Autowired
    private BeerRepository _beerRepository;

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
        //Act
        int countBefore = _beerRepository.findAll().size();
        _beerRepository.deleteById(1);
        int countAfter = _beerRepository.findAll().size();
        //Assert
        assertThat(countBefore).isEqualTo(1);
        assertThat(countAfter).isEqualTo(0);

    }

    @Test
    void findBeerById() {
    }
}