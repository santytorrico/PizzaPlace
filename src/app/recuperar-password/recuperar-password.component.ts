import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from '../services/firebase-code-error.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.scss']
})
export class RecuperarPasswordComponent implements OnInit{
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
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    
  }
  
  recovery(){
    this.userService.recover(this.formReg.value)
    .then(response=>{
      console.log(response);
      this.router.navigate(['/Login'])
    })
    .catch((error) => {
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    });
    
  }

}
