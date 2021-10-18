package com.savov.beer_io.model;

import com.savov.beer_io.enums.PlayerRole;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false, updatable = false)
    private int id;
    private String username;
    private String email;
    private String country;
    @Enumerated(EnumType.STRING)
    private PlayerRole role = PlayerRole.USER;
    private Long score = 0L;

}