package com.savov.beer_io.repo;

import com.savov.beer_io.model.Beer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BeerRepository extends JpaRepository<Beer, Integer> {

    void deleteById(Integer id);

    Optional<Beer> findBeerById(Integer id);

    Boolean existsBeerByBrandName(String brandName);
}
