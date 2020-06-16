import { Component, OnInit, Input } from '@angular/core';
import { PerfilI } from 'src/app/core/interfaces/perfil.interface';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css'],
})
export class PerfisComponent implements OnInit {
  constructor() {}
  perfil: PerfilI;
  @Input() perilVarClasse;
  env = environment.apifile;
  ngOnInit(): void {
    console.log('perilVarClasse:', this.perilVarClasse);
  }
}
