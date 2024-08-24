import { inject, Injectable, signal } from "@angular/core";
import { catchError, EMPTY, Subject, switchMap } from "rxjs";
import { LoginCredentials } from "../../../shared/interfaces/login-credentials";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { AuthenticationService } from "../../../shared/data-access/authentication/authentication.service";

export type LoginStatus = 'pending login' | 'logging in' | 'logged in' | 'login error';

interface LoginState {
    status: LoginStatus;
}

@Injectable()
export class LoginService {
    private state = signal<LoginState>({ status: 'pending login' });
    private authenticationService = inject(AuthenticationService);

    login$ = new Subject<LoginCredentials>();
    loginError$ = new Subject<any>();
    
    loggedIn$ = this.login$.pipe(
        switchMap((loginCredentials) =>
            this.authenticationService
                .login(loginCredentials)
                .pipe(catchError((error) => {
                    this.loginError$.next(error);
                    return EMPTY;
                }))
        )
    );

    constructor() {
        this.login$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.state.update((state) => ({ status: 'logging in' })));

        this.loggedIn$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.state.update((state) => ({ status: 'logged in' })));

        this.loginError$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.state.update((state) => ({ status: 'login error' })));
    }
}