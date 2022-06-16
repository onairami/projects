package com.onairami.web.uni.controller;

import com.onairami.web.uni.domain.LoginForm;
import com.onairami.web.uni.domain.User;
import com.onairami.web.uni.service.UserServiceImpl;
import com.onairami.web.uni.utils.Constants;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(path="/api/public")
public class PublicController {

    @Autowired
    UserServiceImpl userService;

    private Map<String, String> generateJWTToken(User user) {
        Long timestamp = System.currentTimeMillis();

        String token = Jwts.builder() .signWith(SignatureAlgorithm.HS256, Constants.API_SECRET_KEY)
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date(timestamp + Constants.TOKEN_VALIDITY))
                .claim("userId", user.getUserId())
                .claim("userNo", user.getUserNumber())
                .claim("userFirstName", user.getUserFirstName())
                .claim("userLastName", user.getUserLastName())
                .compact();

        Map<String, String> map = new HashMap<>();
        map.put("token", token);
        return map;
    }

    @CrossOrigin
    @PostMapping("/login")
    public Map<String, String> login(@RequestBody LoginForm loginForm){
        String userNo = loginForm.getUserNo();
        String userPassword = loginForm.getUserPassword();
        System.out.println(("Llego la solicitud para el usuario "+userNo));
        User user = userService.authenticateUser(userNo, userPassword);
        System.out.println("Usuario autenticado: "+userNo);
        Map<String, String> map = new HashMap<>(this.generateJWTToken(user));
        map.put("userId",user.getUserId().toString());
        map.put("userNo", user.getUserNumber().toString());
        return map;
    }
}
