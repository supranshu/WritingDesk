// Dashboard Component TypeScript
import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  posts: any[] = []; // Array to hold the list of posts

  constructor(private service: ApisService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.service.getAllPosts().subscribe(
      (data: any) => {
        this.posts = data; // Assign the retrieved posts to the posts array
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', {
          duration: 3000
        });
      }
    );
  }

  contactUser(username: string): void {
    
    localStorage.setItem('contactedUser', username);
    
    this.router.navigateByUrl('/contact');
  }
}
