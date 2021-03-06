package com.savov.beer_io.service;

import com.savov.beer_io.exceptions.BeerNotFoundException;
import com.savov.beer_io.model.Beer;
import com.savov.beer_io.repo.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class BeerServiceImpl implements BeerService {
    private final BeerRepository beerRepository;

    @Autowired
    public BeerServiceImpl(BeerRepository beerRepository){
        this.beerRepository = beerRepository;
    }

    public Beer addBeer(Beer beer) {
        return beerRepository.save(beer);
    }

    public List<Beer> findAllBeers(){
        return beerRepository.findAll();
    }

    public Beer updateBeer(Beer beer){
        return beerRepository.save(beer);
    }

    public Beer findBeerById(Long id) {
        return beerRepository.findBeerById(id).orElseThrow(() -> new BeerNotFoundException("Beer with ID:" + id + " not found"));
    }

    public void deleteBeer(Long id){
        Beer beer = beerRepository.findBeerById(id).orElseThrow(() -> new BeerNotFoundException("Beer with ID:" + id + " not found"));

        beerRepository.delete(beer);
    }
}
