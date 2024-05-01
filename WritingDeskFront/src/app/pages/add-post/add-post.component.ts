import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css'
})
export class AddPostComponent implements OnInit {
  ngOnInit(): void {
    if (!localStorage.length) {
      
      this.router.navigateByUrl('/login');
    }
      this.username = localStorage.getItem('username') ?? '';
  }
  public username: string | null = '';

  constructor(private snack:MatSnackBar, private router:Router, private service:ApisService) { }

  public post = {
    blogTitle: '',
    blogDescription: '',
    username: this.username,
    blogDate: '',
  };

  public putPost(): void {
  this.post.username = localStorage.getItem('username') ?? ''; // Retrieve username here
  this.service.addPost(this.post).subscribe((data: any) => {
    console.log(data);
    this.snack.open('Post added successfully', '', { duration: 3000 });
    this.router.navigateByUrl('/user-dashboard');
  }, (error) => {
    console.log(error);
    this.snack.open('Something went wrong', '', { duration: 3000 });
  });
}


}
