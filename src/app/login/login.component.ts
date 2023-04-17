import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private userService:UserService, private router:Router){
    this.formLogin= new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response=>{
      this.router.navigate(["/Products"])
      console.log(response);
    })
    .catch(error => console.log(error));
  }

  onClickLoginGoogle(){
    this.userService.loginWithGoogle()
    .then(response=>{
      this.router.navigate(["/Products"]);
    })
    .catch(error=> console.log(error))
  }
  onRegisterClick() {
    this.router.navigate(['/Register']);
    }
}
