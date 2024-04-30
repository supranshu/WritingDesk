package com.writingdesk.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.writingdesk.model.User;
import com.writingdesk.repo.PostRepo;
import com.writingdesk.repo.UserRepo;

@Service
public class UserService {

	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PostRepo postRepo;
	
	  @Autowired
	  private BCryptPasswordEncoder passwordEncoder;
	  
	  
	  //signup
	  public User signup(User user) {
	        String encodedPassword = passwordEncoder.encode(user.getPassword());
	        user.setPassword(encodedPassword);
	        return userRepo.save(user);
	    }
	  
	//login
	    public ResponseEntity<User> login(String username, String password) {
	        Optional<User> optionalUser = Optional.ofNullable(userRepo.findByUsername(username));

	        if (optionalUser.isPresent()) {
	             User user = optionalUser.get();
	            
	            if (passwordEncoder.matches(password, user.getPassword())) {
	                // Return role in a JSON object
	                return ResponseEntity.ok(user);
	            }
	        }

	        
	        return ResponseEntity.ok(null);
	    }
	  
	  
}
