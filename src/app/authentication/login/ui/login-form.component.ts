import { Component, inject, input, output } from "@angular/core";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LoginStatus } from "../data-access/login.service";
import { LoginCredentials } from "../../../shared/interfaces/login-credentials";


@Component({
    selector: 'login-form',
    standalone: true,
    imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule, MatProgressSpinnerModule],
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
    loginStatus = input.required<LoginStatus>();
    login = output<LoginCredentials>();

    private formBuilder = inject(FormBuilder);
    loginForm = this.formBuilder.nonNullable.group({
        email: [''],
        password: ['']
    });
}