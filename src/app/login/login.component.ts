import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from '../services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private userService:UserService, 
    private router:Router,
    //
    private fb: FormBuilder,
    private toastr: ToastrService,
    private firebaseError: FirebaseCodeErrorService){
    // this.formLogin= new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // })
    this.formLogin= this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
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
    .catch((error) => {
      //this.loading = false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    })
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
