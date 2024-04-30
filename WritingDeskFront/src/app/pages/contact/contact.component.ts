import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit{

  ngOnInit(): void {
      this.contactuser = localStorage.getItem('contactedUser') ?? '';
      this.contact();

  }

  constructor(private router:Router, private snack:MatSnackBar, private service:ApisService) { }

  public contactuser: string | null = '';

  public contact(): void {
    this.service.contactUser(this.contactuser).subscribe((data:any)=>{
      console.log(data);
      this.snack.open('Contacted User','',{
        duration:3000
      });
      this.router.navigateByUrl('/dashboard');
    },(error)=>{
      console.log(error);
      this.snack.open('Something went wrong','',{
        duration:3000
      });
    }
  );



  }

}
