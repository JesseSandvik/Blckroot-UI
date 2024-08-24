import { Injectable } from "@angular/core";
import { LoginCredentials } from "../../interfaces/login-credentials";
import { defer, EMPTY, from } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    register(loginCredentials: LoginCredentials) {
        console.log(loginCredentials);
        return from(defer(() => EMPTY));
    }

    login(loginCredentials: LoginCredentials) {
        console.log(loginCredentials);
        return from(defer(() => EMPTY));
    }

    logout() { }
}