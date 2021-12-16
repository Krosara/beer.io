package com.savov.beer_io.controller;

import com.savov.beer_io.dto.BeerDTO;
import com.savov.beer_io.model.Beer;
import com.savov.beer_io.service.BeerServiceImpl;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RequiredArgsConstructor
@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/api/beer")
public class BeerController {

    @Autowired
    private ModelMapper modelMapper;

    private final BeerServiceImpl beerService;

    @GetMapping
    public List<BeerDTO> getAllBeers() {
        return beerService.findAllBeers().stream().map(beer -> modelMapper.map(beer, BeerDTO.class)).toList();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BeerDTO> getBeerById (@PathVariable("id") Long id) {
        Beer beer = beerService.findBeerById(id);
        BeerDTO beerDTO = modelMapper.map(beer, BeerDTO.class);
        return ResponseEntity.ok().body(beerDTO);
    }

    @PostMapping("/add")
    public ResponseEntity<BeerDTO> addBeer(@RequestBody BeerDTO beerDto) {
        Beer request = modelMapper.map(beerDto, Beer.class);
        Beer beer = beerService.addBeer(request);
        BeerDTO response = modelMapper.map(beer, BeerDTO.class);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<BeerDTO> updateBeer(@RequestBody BeerDTO beerDto) {
        Beer request = modelMapper.map(beerDto, Beer.class);
        Beer beer = beerService.updateBeer(request);
        BeerDTO response = modelMapper.map(beer, BeerDTO.class);
        return ResponseEntity.ok().body(response);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteBeer(@PathVariable("id") Long id) {

        Beer result = beerService.findBeerById(id);

        if (result == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.OK);

    }
}
