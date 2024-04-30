package com.writingdesk.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.writingdesk.model.Post;
import com.writingdesk.model.User;
import com.writingdesk.repo.PostRepo;
import com.writingdesk.service.PostService;
import com.writingdesk.service.UserService;

@RestController
@RequestMapping("/writing")
@CrossOrigin("*")
public class HomeController {
	
	@Autowired
	private PostService postService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/signup")
	public User signup(@RequestBody User user) {
		
		return userService.signup(user);
	}
	
	
	@GetMapping("/login/{username}/{password}")
	public ResponseEntity<User> getLogin(@PathVariable("username")String username,@PathVariable("password")String password) {
		
		return userService.login(username, password);
	}

	@PostMapping("/create-post")
	public Post createPost(@RequestBody Post post) {
		
		return postService.createPost(post);
	}
	
	@GetMapping("/all-post")
	public List<Post> getAllPosts(){
		return postService.allPost();
	}
	
	@DeleteMapping("/delete-post/{blogTitle}")
	public String deletePost(@PathVariable("blogTitle")String blogTitle) {
		return postService.deletePost(blogTitle);
	}
	
	@GetMapping("/contact-user/{username}")
	public User contactUser(@PathVariable("username")String username) {
		return postService.contactUser(username);
	}
	
	@GetMapping("/user-posts/{username}")
	public List<Post> userPosts(@PathVariable("username")String username){
		
		return postService.usersPosts(username);
	}
	
}
