import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(
    private fb: FormBuilder,
    private autenticacao: ContaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      email: this.fb.control('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+'),
      ]),
      senha: this.fb.control('', [Validators.required]),
    });
  }
  submit() {
    this.autenticacao
      .login(this.formLogin.value.email, this.formLogin.value.senha)
      .subscribe((res) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/perfis');
      });
  }
  assinar() {
    this.router.navigateByUrl('/Auth/registro');
  }
}
