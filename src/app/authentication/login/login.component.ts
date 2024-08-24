import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from './data-access/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule],
  providers: [LoginService],
  template: '<div>Login Here</div>'
})
export class LoginComponent { }
