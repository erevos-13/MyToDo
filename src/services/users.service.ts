import {Injectable} from '@angular/core';
import {Subscription} from 'rxjs';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(private afs: AngularFirestore,
                private afAuth: AngularFireAuth,
    ) {
    }


    public registerUser(input_: IUserInput) {
        this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(input_.email, input_.password)
            .then((registerUser) => {
                console.log({registerUser: registerUser});
            })
            .catch((err) => {
                console.log({registerUser: err});
            });

    }

}// END CLASS

interface IUserInput {
    email: string;
    password: string;
}
