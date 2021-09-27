package com.savov.beer_io.registration;

import com.savov.beer_io.enums.PlayerRole;
import com.savov.beer_io.model.Player;
import com.savov.beer_io.service.PlayerService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class RegistrationService {

    private final PlayerService playerService;
    private final EmailValidator emailValidator;

    public String register(RegistrationRequest request) {
        boolean isValidEmail = emailValidator.test(request.getEmail());
        if (!isValidEmail){
            throw new IllegalStateException("Email not valid");
        }
        return playerService.signUpPlayer(new Player(
                request.getUsername(),
                request.getEmail(),
                request.getPassword(),
                request.getCountry(),
                PlayerRole.USER));
    }
}
