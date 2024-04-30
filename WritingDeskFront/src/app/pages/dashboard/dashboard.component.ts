import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{

  ngOnInit(): void {
      this.loadAllPosts();
  }

  constructor(private service:ApisService, private snack:MatSnackBar, private router:Router) { }


  public loadAllPosts(){
    
  }
}
