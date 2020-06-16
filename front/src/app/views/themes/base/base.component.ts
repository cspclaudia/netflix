import { Component, OnInit, Input } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';
import { Router } from '@angular/router';
import { ContaI } from 'src/app/core/interfaces/conta.interface';
import { PerfilI } from 'src/app/core/interfaces/perfil.interface';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import 'sweetalert2/src/sweetalert2.scss';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class BaseComponent implements OnInit {
  constructor(private autenticacao: ContaService, private router: Router) {}
  conta: ContaI;
  @Input() perilVarClasse;
  ngOnInit(): void {
    this.autenticacao.buscarContaLogada().subscribe((conta) => {
      this.conta = conta;
      console.log('ContaLogada:', this.conta);
    });
  }
  sair() {
    localStorage.removeItem('token');
    this.router.navigateByUrl('/Auth/login');
  }
}
