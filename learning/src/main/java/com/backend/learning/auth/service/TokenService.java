package com.backend.learning.auth.service;

import java.security.Key;
import java.util.Date;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@Service
public class TokenService {
    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.access_token_expiration}")
    private long accessTokenExpiration;

    public String extractEmail(String token){
        return extractClaim(token,Claims::getSubject);/// tokenda subject ya'ni emailni ajratish olish
    }

    public <T> T extractClaim(String token,Function<Claims,T> resolver){
        final Claims claims=extractAllClaims(token);//tokendan claim larni ajratib olish ya'ni ma'lumotlarni
        return resolver.apply(claims);
    }

    public String generateToken(String email){
        return Jwts.
                    builder()// tokenni yaratishni boshlaydi.
                    .setSubject(email)//sub ga emailni biriktiradi.
                    .setIssuedAt(new Date())// tokenni amal qilish muddati
                    .setExpiration(new Date(System.currentTimeMillis()+accessTokenExpiration))//tugashi
                    .signWith(getSigningKey(),SignatureAlgorithm.HS256)// algoritm bo'yicha kodlash
                    .compact();//Base64 yani string formatda qaytarish
    }

    public boolean isTokenValid(String token,String email){
        final String extractEmail=extractEmail(token);// token amal qiladimi shuni tekshiradi 
        return (extractEmail.equals(email)) && !isTokenExpired(token);// va uning
    }// sub qismi tengligi orqali va muddati orqali

    private boolean isTokenExpired(String token){// tokenning amal qilish vaqti
        return extractExpiration(token).before(new Date());
    }

    private Date extractExpiration(String token){// tokendan amal qilish vaqti 
        return extractClaim(token, Claims::getExpiration);//yani getExpiration ni
    }

    private Claims extractAllClaims(String token){
        return Jwts.
                    parserBuilder()// tokenni tahlil qilish
                    .setSigningKey(getSigningKey())//tokenni imzolashda ishlatiladigan maxfiy kalit
                    .build()//parser obektini tayyorlaydi
                    .parseClaimsJws(token)//tokenni dekod qiladi va imzoni tekshiradi
                    .getBody();// ma'lumotlarni oladi. yani payload tokendagi qiymatlarni Claims qilib qaytaradi
    }

    private Key getSigningKey(){
        return Keys.hmacShaKeyFor(secretKey.getBytes());
    }
}
