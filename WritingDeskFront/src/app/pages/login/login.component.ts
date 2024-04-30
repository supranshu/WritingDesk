import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Change styleUrl to styleUrls
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    localStorage.clear();
  }
  public loginData = {
    username: '',
    password: ''
  };

  constructor(private snack: MatSnackBar, private router: Router, private service: ApisService, private http: HttpClient) { }

  public login() {
    console.log(this.loginData.username, this.loginData.password + 'login');
    this.service.login(this.loginData.username, this.loginData.password).subscribe(
      (data: any) => {
        console.log(data);
        localStorage.setItem('username', data.username);
        this.router.navigateByUrl('/dashboard');
      },
      (error) => {
        console.log(error);
        this.snack.open('Invalid credentials', '', {
          duration: 3000
        });
      }
    );
  }
}
