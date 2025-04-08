import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { TiendaService } from '../../services/tienda.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  step = 2; // Empezamos directamente en el paso 2

  userData: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tiendaService: TiendaService
  ) {}

  previousStep() {
    this.step--;
  }

  register() {
    if (this.userData.valid) {
      const { name, email, password } = this.userData.value;

      this.authService.register(name, email, password).subscribe((value) => {
        if (value === true) {
          this.router.navigateByUrl('/dashboard');
        } else {
          const { msg } = value as { ok: boolean, msg: string };
          Swal.fire('Error', msg, 'error');
        }
      });
    } else {
      console.log("Formulario de userData no válido");
    }
  }
}
