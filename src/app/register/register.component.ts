import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from '../services/firebase-code-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  formReg: FormGroup;

  constructor(private userService: UserService,
     private router:Router,
     //
     private fb: FormBuilder,
     //
     private toastr: ToastrService,
     private firebaseError: FirebaseCodeErrorService){
    // this.formReg = new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // })
    this.formReg = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, this.matchValues('password')]]
    });
  }

  ngOnInit(): void {
    
  }

  matchValues(matchTo: string) {
    return (control: any) => {
      // control es el campo confirmPassword en este caso
      return control?.value === control?.parent?.controls[matchTo].value ? null : {match: true}
    }
  }

  onSubmit(){
    this.userService.register(this.formReg.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/Login'])
    })
    .catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    });
    
  }

}
