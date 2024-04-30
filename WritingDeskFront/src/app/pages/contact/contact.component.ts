import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from '../../services/apis.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private router: Router, private snack: MatSnackBar, private service: ApisService) { }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      this.contactuser = localStorage.getItem('contactedUser') ?? '';
      this.contact();
    } else {
      console.error('localStorage is not supported in this environment');
    }
  }

  public contactuser: string | null = '';
  fullName: string | undefined;
  city: string | undefined;
  email: string | undefined;
  phNo: string | undefined;
  age: number | undefined;

  public contact(): void {
    this.service.contactUser(this.contactuser).subscribe((data: any) => {
      console.log(data);
      this.fullName = data.fullName;
      this.city = data.city;
      this.email = data.email;
      this.phNo = data.phNo;
      this.age = data.age;
      this.snack.open('Contacted User', '', {
        duration: 3000
      });
      
    }, (error) => {
      console.log(error);
      this.snack.open('Something went wrong', '', {
        duration: 3000
      });
    });
  }
}
