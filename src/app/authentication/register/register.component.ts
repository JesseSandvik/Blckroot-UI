import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterService } from './data-access/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule],
  providers: [RegisterService],
  template: '<div>Register Here</div>'
})
export class RegisterComponent { }
