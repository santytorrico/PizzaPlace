import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from '../services/firebase-code-error.service';
import { FirestoreDatosService } from '../firestore-datos.service';
import { UserI } from '../UserInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  item: any;

  perf: boolean = false;

  id1: string | undefined = '';
  datos: UserI = {
    email: '',
    password: '',
    uid: '',
    perfil: 'visitante'
  }

  constructor(private userService: UserService,
    private router: Router,
    private firestore: FirestoreDatosService,
    //
    private fb: FormBuilder,
    private toastr: ToastrService,

    private firebaseError: FirebaseCodeErrorService) {
    // this.formLogin= new FormGroup({
    //   email: new FormControl(),
    //   password: new FormControl()
    // })
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.userService.login(this.formLogin.value)
      .then(response => {
        if (response) {
          this.FindIdAdmin(response.user.uid);
          // if (this.perf == true) {
          //   console.log('cargando register');
          //   this.router.navigate(["/Register"]);
          // }
          // else {
          //   console.log('cargando productos');
          //   this.router.navigate(["/Products"]);
          // }
        }
        //this.FindIdAdmin(response.user.uid);
        // this.router.navigate(["/Products"])
        // console.log(response);
      })
      .catch((error) => {
        //this.loading = false;
        this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
      })
  }

  async FindIdAdmin(uid: string) {
    const path = 'Usuarios';
    const id = uid;
    console.log('aqui eeeeeeeeeeeeeuid ', id);
    this.firestore.findObject(uid, path).then(data => {
      this.item = data.data();
      console.log('2...este es el resultado', this.item);
      console.log('PERFI1wwwww2L:', this.item);
      if (this.item.perfil === 'admin') {
        this.perf = true;
        this.router.navigate(['/Admin']);
        console.log(this.perf)
      }
      else {
        this.perf = false;
        this.router.navigate(['/Products']);
        console.log(this.perf)
      }
    })

    // this.userService.stateUser().subscribe( res=> {
    //   console.log('PERFIL:',this.item);
    //   if(this.item.perfil == 'admin')
    //   {
    //     this.router.navigate(['/Register']);
    //   }
    // })
  }
  // onClickLoginGoogle(){
  //   this.userService.loginWithGoogle()
  //   .then(response=>{
  //     this.router.navigate(["/Products"]);
  //   })
  //   .catch(error=> console.log(error))
  // }

  onClickLoginGoogle() {
    this.userService.loginWithGoogle()
      .then(response => {
        const path = 'Usuarios';
        const id = response.user.uid;
        // const user: UserI = {
        //   uid: response.user.uid,
        //   email: response.user.email ??
        // };
        this.datos.email = response.user.email ? response.user.email : '';
        this.datos.uid = id;
        this.datos.password = '';
        this.firestore.createDoc(this.datos, path, id)

      })
      .then(() => {
        this.router.navigate(["/Products"]);
      })
      .catch(error => console.log(error))
  }

  onRegisterClick() {
    this.router.navigate(['/Register']);
  }
}
