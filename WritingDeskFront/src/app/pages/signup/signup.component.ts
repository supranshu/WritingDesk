import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Agent } from 'http';
import { ApisService } from '../../services/apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor(private snack:MatSnackBar, private service:ApisService,private router:Router) { }
  public signupData={
    username:'',
    email:'',
    password:'',
    fullname:'',
    phNo:'',
    age:'',
    city:'',
  }

  public signup(){
    console.log(this.signupData);
    if(false){
      this.snack.open('All fields are required','',{
        duration:3000
      });
      
    }else{
      this.service.signup(this.signupData).subscribe((data:any)=>{
        console.log(data);
        this.snack.open('Signup Successfull','',{
          duration:3000
        });
        this.router.navigateByUrl('/login');
      },(error)=>{
        console.log(error);
        this.snack.open('Something went wrong','',{
          duration:3000
        });
      });
    }
    

    
  }

}
