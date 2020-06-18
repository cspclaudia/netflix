import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/src/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-perfis',
  templateUrl: './perfis.component.html',
  styleUrls: ['./perfis.component.css'],
})
export class PerfisComponent implements OnInit {
  constructor(private perfil: PerfilService,  private fb: FormBuilder, private router: Router) { }

  @Input() perfilVarClasse;
  checkboxModel = { value: false };
  formPerfil: FormGroup;
  show: any;
  varImagemSelecionada: string;
  config = localStorage.getItem('config');

  ngOnInit(): void {
    // console.log('this.config :', this.config);
    if (this.config === 'false') {
      this.show = false;
    }
    this.formPerfil = this.fb.group({
      Nome: this.fb.control('', [Validators.required]),
      ImagemUrl: this.varImagemSelecionada,
      Restricao: this.checkboxModel.value,
    });
  }
  editar(perfil) {
    this.formPerfil.value.ImagemUrl = this.varImagemSelecionada;
    let nome = this.formPerfil.value.Nome;
    let infantil = this.formPerfil.value.Restricao;
    let imagem = this.formPerfil.value.ImagemUrl;
    this.perfil
      .editarPerfil(perfil._id, nome, infantil, imagem)
      .subscribe((res) => {
        console.log('editarPerfil:', res);
        window.location.reload();
      });
    this.show = false;
  }
  deletar(perfil) {
    this.perfil.deletarPerfil(perfil._id).subscribe((res) => {
      console.log('deletarPerfil:', res);
      window.location.reload();
    });
    if (this.config === 'false') {
      this.show = true;
      localStorage.setItem('config', 'true');
    }
  }
  video() {
    this.router.navigateByUrl('/video');
  }
  abrirModal() {
    this.show = true;
  }
  cancelar() {
    this.show = false;
  }
  ckeckValue() {
    if (this.checkboxModel.value === true) {
      this.checkboxModel.value = false;
    } else {
      this.checkboxModel.value = true;
    }
  }
  onSelect(event) {
    const img = (event.target as Element).id;
    const src = document.getElementById(img).getAttribute('src');
    this.varImagemSelecionada = src;
  }
}
