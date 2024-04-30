import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent implements OnInit{

  ngOnInit(): void {
      this.username = localStorage.getItem('username') ?? '';

  }

  constructor(private router:Router, private snack:MatSnackBar, private service:ApisService) { }

  public username: string | null = '';


  
}
