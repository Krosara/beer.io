package com.savov.beer_io.controller;

import com.savov.beer_io.dto.MessageDTO;
import com.savov.beer_io.dto.ResponseMessageDTO;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.HtmlUtils;

@Controller
@CrossOrigin("http://localhost:3000")
public class MessageController {

    @MessageMapping("/message")
    @SendTo("/topic/messages")
    public ResponseMessageDTO getMessage(@Payload MessageDTO messageDTO) {
        System.out.println(messageDTO + " kur");
        return new ResponseMessageDTO(HtmlUtils.htmlEscape(messageDTO.getMessageContent()));
    }
}
