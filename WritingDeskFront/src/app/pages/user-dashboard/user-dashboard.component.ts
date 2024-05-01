import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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

  constructor(
    private router: Router,
    private snack: MatSnackBar,
    private service: ApisService,
    private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    if (!localStorage.length) {
      this.router.navigateByUrl('/login');
    }
    this.username = localStorage.getItem('username') ?? '';
    this.getUser();
    this.getPostByUser();
  }

  getUser(): void {
    // Fetch user details from the API
    this.service.contactUser(this.username ?? '').subscribe(
      (data: any) => {
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
    // Fetch posts by user from the API
    this.service.getPostByUsername(this.username ?? '').subscribe(
      (data: any) => {
        this.posts = data; // Assign fetched posts to the component variable
        this.snack.open('User Posts', '', { duration: 3000 });
      },
      (error) => {
        console.log(error);
        this.snack.open('Something went wrong', '', { duration: 3000 });
      }
    );
  }

  deletepost(blogTitle: string): void {
    // Delete post from the API
    this.service.deletePost(blogTitle).subscribe(
      (data: any) => {
        this.snack.open('Post Deleted', '', { duration: 3000 });
        
        // Find the index of the post to be deleted
        const index = this.posts.findIndex(post => post.blogTitle === blogTitle);
        
        // If the post is found, remove it from the posts array
        if (index !== -1) {
          this.posts.splice(index, 1);
          // Manually trigger change detection to update the view
          this.cdr.detectChanges();
        }
      },
      (error) => {
        console.log(error);
        // this.snack.open('Failed to delete post', '', { duration: 3000 });
      }
    );
  }
}
