import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formCadastro: FormGroup;
  // textMaskTelefone$: BehaviorSubject<{ mask: (RegExp | string)[], guide: boolean }>;

  constructor(
    private fb: FormBuilder,
    private conta: ContaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      Email: this.fb.control('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+'),
      ]),
      Telefone: this.fb.control('', [
        Validators.required,     
        Validators.pattern('[0-9]+'),
        Validators.minLength(10),
        Validators.maxLength(11),
      ]),
      Senha: this.fb.control('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]+'),
        Validators.minLength(8),
      ]),
    });
  }
  submit() {
    this.conta.cadastrarConta(this.formCadastro.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl('Auth/login');
    });
  }
  assinar() {
    this.router.navigateByUrl('/Auth/login');
  }
}
