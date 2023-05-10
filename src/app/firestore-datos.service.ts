import { Injectable } from '@angular/core';
import { Firestore,collection, addDoc, collectionData, doc, deleteDoc,updateDoc } from '@angular/fire/firestore';
import { getDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreDatosService {

  constructor(private firestore:Firestore) {

   }

   createDoc(data: any, path: string, id: string) {
    // const collection = this.firestore.collection(path);
    const usuarioRef = collection(this.firestore, path);
    return addDoc(usuarioRef,data);
   }
   findObject(id: string = '', path: string){
    // const recPerson=doc(this.firestore,`${path}/${id}`);
    const recPerson=doc(this.firestore,`Usuarios/${id}`);
    return getDoc(recPerson);
  }

}
