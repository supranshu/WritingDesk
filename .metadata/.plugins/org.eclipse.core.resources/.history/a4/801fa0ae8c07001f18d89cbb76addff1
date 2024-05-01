package com.writingdesk.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.writingdesk.model.Post;
import com.writingdesk.model.User;
import com.writingdesk.repo.PostRepo;
import com.writingdesk.repo.UserRepo;

@Service
public class PostService {

	
	@Autowired
	private UserRepo userRepo;
	
	@Autowired
	private PostRepo postRepo;
	
	
	//Create Post
	public Post createPost(Post post) {
		
		return postRepo.save(post);
	}
	
	//Show all posts after successfull user login
	public List<Post> allPost(){
		
		return postRepo.findAll();
	}
	
	//Contact the Post's User
	public User contactUser(String username) {
		
		User user;
		user=userRepo.findByUsername(username);
		
		return user;
	}
	
	//User's All posts
	public List<Post> usersPosts(String username){
		List<Post> posts=postRepo.findByUsername(username);
		return posts;
	}
	
	//Delete Post
	public String deletePost(String blogTitle) {
		
		Post post=postRepo.findByBlogTitle(blogTitle);
		
		long id=post.getPostId();
		postRepo.delete(post);
		try {
			postRepo.deleteById(id);
		}
		catch(Exception e) {
			e.printStackTrace();
		}
		return "Post Deleted Successfully";
	}
}
