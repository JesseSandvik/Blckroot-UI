import { inject, Injectable, signal } from "@angular/core";
import { AuthenticationService } from "../../../shared/data-access/authentication/authentication.service";
import { catchError, EMPTY, Subject, switchMap } from "rxjs";
import { LoginCredentials } from "../../../shared/interfaces/login-credentials";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

export type RegistrationStatus = 'pending registration' | 'registering' | 'registered' | 'registration error';

interface RegistrationState {
    status: RegistrationStatus;
}

@Injectable()
export class RegisterService {
    private state = signal<RegistrationState>({ status: 'pending registration' });
    private authenticationService = inject(AuthenticationService);

    register$ = new Subject<LoginCredentials>();
    registrationError$ = new Subject<any>();
    
    registered$ = this.register$.pipe(
        switchMap((loginCredentials) =>
            this.authenticationService
                .register(loginCredentials)
                .pipe(catchError((error) => {
                    this.registrationError$.next(error);
                    return EMPTY;
                }))
        )
    );

    constructor() {
        this.register$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.state.update((state) => ({ status: 'registering' })));

        this.registered$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.state.update((state) => ({ status: 'registered' })));

        this.registrationError$
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.state.update((state) => ({ status: 'registration error' })));
    }
}