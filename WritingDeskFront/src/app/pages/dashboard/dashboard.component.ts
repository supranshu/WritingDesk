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
  posts: any[] = [];
  filteredPosts: any[] = [];
  filterUsername: string = '';

  constructor(private service: ApisService, private snack: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    if (!localStorage.length) {
      this.router.navigateByUrl('/login');
    }
    this.loadAllPosts();
  }

  loadAllPosts(): void {
    this.service.getAllPosts().subscribe(
      (data: any) => {
        this.posts = data;
        this.filteredPosts = data; // Initialize filteredPosts with all posts
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
  }

  contactUser(username: string): void {
    localStorage.setItem('contactedUser', username);
    this.router.navigateByUrl('/contact');
  }

  filterByUsername(): void {
    if (this.filterUsername.trim() === '') {
      this.filteredPosts = this.posts; // Show all posts if the filter is empty
    } else {
      this.filteredPosts = this.posts.filter(post =>
        post.username.toLowerCase().includes(this.filterUsername.toLowerCase())
      );
    }
  }
  showFilter: boolean = false;

toggleFilter(): void {
  this.showFilter = !this.showFilter;
}
}