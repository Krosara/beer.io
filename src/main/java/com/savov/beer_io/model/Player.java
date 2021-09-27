package com.savov.beer_io.model;

import com.savov.beer_io.enums.PlayerRole;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;


import javax.persistence.*;
import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@EqualsAndHashCode
@NoArgsConstructor
@Entity
public class Player implements UserDetails {

    @SequenceGenerator(
            name = "player_sequence",
            sequenceName = "player_sequence",
            allocationSize = 1
    )

    @Id
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "player_sequence"
    )
    @Column(nullable = false, updatable = false)
    private Long id;
    private String username;
    private String email;
    private String password;
    private String country;
    @Enumerated(EnumType.STRING)
    private PlayerRole playerRole;
    private Boolean locked = false;
    private Boolean enabled = true;


    @Autowired
    public Player(String username, String email, String password, String country, PlayerRole playerRole) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.country = country;
        this.playerRole = playerRole;
    }

//    @Override
//    public String toString () {
//        return "Player{" + "id=" + id
//                        + ", username='" + username + "\'"
//                        + ", email='" + email + "\'"
//                        + ", password" + password + "\'"
//                        + ", country" + country + "\'"
//                        + ", role" + playerRole + "\'" + "}";
//    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority(playerRole.name());
        return Collections.singletonList(authority);
    }


    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return !locked;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return enabled;
    }
}