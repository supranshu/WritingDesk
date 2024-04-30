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
        // Assuming your response contains user details
        // For example, if your API response contains 'fullName', you can assign it here
        // this.fullName = data.fullName;
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

  contactUser(username: string): void {
    // Implement your logic to contact the user
    console.log('Contacting user:', username);
  }
}
