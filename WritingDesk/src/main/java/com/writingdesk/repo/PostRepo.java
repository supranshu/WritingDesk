package com.writingdesk.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.writingdesk.model.Post;

@Repository
public interface PostRepo extends JpaRepository<Post, Long> {

	List<Post> findByUsername(String username);
	Post findByBlogTitle(String blogTitle);
}

