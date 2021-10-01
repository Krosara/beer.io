package com.savov.beer_io.exceptions;

public class PlayerNotFoundException extends RuntimeException{
    public PlayerNotFoundException(String message){
        super(message);
    }
}
