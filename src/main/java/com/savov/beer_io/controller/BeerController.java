package com.savov.beer_io.controller;

import com.savov.beer_io.model.Beer;
import com.savov.beer_io.service.BeerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/api/beer")
public class BeerController {
    private final BeerService beerService;

    public BeerController(BeerService beerService) {
        this.beerService = beerService;
    }

    @GetMapping
    public ResponseEntity<List<Beer>> getAllBeers() {
        List<Beer> beers = beerService.findAllBeers();
        return new ResponseEntity<>(beers, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Beer> getBeerById (@PathVariable("id") int id) {
        Beer beer = beerService.findBeerById(id);
        return new ResponseEntity<>(beer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Beer> addBeer(@RequestBody Beer beer) {
        Beer newBeer = beerService.addBeer(beer);
        return new ResponseEntity<>(newBeer, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Beer> updateBeer(@RequestBody Beer beer) {
        Beer updateBeer = beerService.updateBeer(beer);
        return new ResponseEntity<>(updateBeer, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBeer(@PathVariable("id") int id) {
        beerService.deleteBeer(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
