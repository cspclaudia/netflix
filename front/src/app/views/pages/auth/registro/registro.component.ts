import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formCadastro: FormGroup;
  constructor(
    private fb: FormBuilder,
    private autenticacao: ContaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      Telefone: this.fb.control('', [Validators.required]),
      Email: this.fb.control('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+'),
      ]),
      Senha: this.fb.control('', [Validators.required]),
    });
  }
  submit() {
    this.autenticacao.cadastrarConta(this.formCadastro.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('Auth/login');
    });
  }
}
