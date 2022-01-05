package com.savov.beer_io.dto;

import com.savov.beer_io.enums.PlayerRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PlayerDTO {
    private Long id;
    private String username;
    private String email;
    private String country;
    private String password;
    private PlayerRole role = PlayerRole.USER;
}
