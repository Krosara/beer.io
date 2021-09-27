package com.savov.beer_io.controller;

import com.savov.beer_io.model.Beer;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/beer")

public class BeerController {

    @GetMapping
    public List<Beer> getBeers()
    {
        return List.of(
                new Beer(
                        1L,
                        "Staropramen",
                        "Pilsner",
                        "Czechia"
                )
        );
    }

    @GetMapping(path = "{id}")
    public Beer GetBeer(@PathVariable("id") long id)
    {
        for (Beer b :
                getBeers()) {
            if (b.getId() == id) {
                return b;
            }
        }
        return null;
    }

}
