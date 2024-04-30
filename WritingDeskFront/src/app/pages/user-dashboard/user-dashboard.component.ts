import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  username: string | null = '';
  posts: any[] = [];
  fullName: string | undefined;
  city: string | undefined;
  email: string | undefined;
  phNo: string | undefined;
  age: number | undefined;

  constructor(private router: Router, private snack: MatSnackBar, private service: ApisService) { }

  ngOnInit(): void {
    this.username = localStorage.getItem('username') ?? '';
    this.getUser();
    this.getPostByUser();
  }

  getUser(): void {
    this.service.contactUser(this.username ?? '').subscribe(
      (data: any) => {
        console.log(data);
        // Assign user details obtained from API response to component variables
        this.fullName = data.fullName;
        this.city = data.city;
        this.email = data.email;
        this.phNo = data.phNo;
        this.age = data.age;
        this.snack.open('User Details', '', { duration: 3000 });
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
  }

  getPostByUser(): void {
    this.service.getPostByUsername(this.username ?? '').subscribe(
      (data: any) => {
        console.log(data);
        this.posts = data; // Assuming your API response directly returns an array of posts
        this.snack.open('User Posts', '', { duration: 3000 });
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
  }

  deletepost(blogTitle: string): void {
    this.service.deletePost(blogTitle).subscribe(
      (data: any) => {
        console.log(data);
        this.snack.open('Post Deleted', '', { duration: 3000 });
        this.getPostByUser();
      }
    );
  }

}
