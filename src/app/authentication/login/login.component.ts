import { Component, effect, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './data-access/login.service';
import { LoginFormComponent } from './ui/login-form.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AuthenticationService } from '../../shared/data-access/authentication/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, LoginFormComponent, MatProgressSpinnerModule],
  providers: [LoginService],
  template: ''
})
export class LoginComponent {
  public loginService = inject(LoginService);
  public authenticationService = inject(AuthenticationService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      console.log(this.authenticationService.user());
      if (this.authenticationService.user()) {
        this.router.navigate(['home']);
      }
    });
  }
}
