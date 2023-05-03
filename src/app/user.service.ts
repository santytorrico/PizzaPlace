import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { sendPasswordResetEmail } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }
  recover({email}:any){
    return sendPasswordResetEmail(this.auth, email);
  }
  register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  login({email,password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  loginWithGoogle(){
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  logout(){
    return signOut(this.auth);
  }
}
