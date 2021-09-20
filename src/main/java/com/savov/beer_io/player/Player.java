package com.savov.beer_io.player;

import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.io.Serializable;

@Entity
public class Player implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    @Getter
    private Long id;
    @Getter
    @Setter
    private String username;
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private String password;
    @Getter
    @Setter
    private String country;
    @Getter
    @Setter
    private Boolean isAdmin;

    public Player() {
    }

    public Player( long id, String username, String email, String password, String country){
            this.id = id;
            this.username = username;
            this.email = email;
            this.password = password;
            this.country = country;
            this.isAdmin = false;
    }


    @Override
    public String toString () {
        return "Player{" + "id=" + id
                        + ", username='" + username + "\'"
                        + ", email='" + email + "\'"
                        + ", password" + password + "\'"
                        + ", country" + country + "\'"
                        + ", admin" + isAdmin + "\'" + "}";
    }
}