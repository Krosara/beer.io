package com.savov.beer_io.exceptions;


public class BeerNotFoundException extends RuntimeException {
    public BeerNotFoundException(String message){
        super(message);
    }
}
