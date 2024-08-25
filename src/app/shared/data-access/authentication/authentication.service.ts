import { computed, Injectable, signal } from "@angular/core";
import { LoginCredentials } from "../../interfaces/login-credentials";
import { defer, EMPTY, from } from "rxjs";

export type User = {
    email: string;
    password: string;
};
export type AuthenticatedUser = User | null | undefined;

interface AuthenticationState {
    user: AuthenticatedUser;
}

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private state = signal<AuthenticationState>({ user: undefined });
    user = computed(() => this.state().user);

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