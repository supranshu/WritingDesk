package com.writingdesk.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long userId;
	private String username;
	private String fullName;
	private String password;
	private String phNo;
	private String email;
	private String city;
	private long age;
	public long getUserId() {
		return userId;
	}
	public void setUserId(long userId) {
		this.userId = userId;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getPhNo() {
		return phNo;
	}
	public void setPhNo(String phNo) {
		this.phNo = phNo;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public long getAge() {
		return age;
	}
	public void setAge(long age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "User [userId=" + userId + ", username=" + username + ", fullName=" + fullName + ", password=" + password
				+ ", phNo=" + phNo + ", email=" + email + ", city=" + city + ", age=" + age + "]";
	}
	public User() {
		super();
		// TODO Auto-generated constructor stub
	}
	public User(long userId, String username, String fullName, String password, String phNo, String email, String city,
			long age) {
		super();
		this.userId = userId;
		this.username = username;
		this.fullName = fullName;
		this.password = password;
		this.phNo = phNo;
		this.email = email;
		this.city = city;
		this.age = age;
	}
	
	
	
	
	
	
	
	

}
