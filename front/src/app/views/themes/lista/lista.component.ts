import { Component, OnInit, Input, HostListener } from '@angular/core';
import { PerfilService } from 'src/app/core/services/perfil.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  constructor(private perfilService: PerfilService, private fb: FormBuilder) {}
  
  perfis = [];
  checkboxModel = { value: false };
  formPerfil: FormGroup;
  show: any;
  varImagemSelecionada: string;

  ngOnInit(): void {
    this.show = false;
    this.perfilService.buscarPerfis().subscribe((res) => {
     // console.log('buscarPerfis', res);
      this.perfis = res.perfis;
    });
    this.formPerfil = this.fb.group({
      Nome: this.fb.control('', [Validators.required]),
      ImagemUrl: this.varImagemSelecionada,
      Restricao: this.checkboxModel.value,
    });
  }
  abrirModal() {
    this.show = true;
  }
  adicionarPerfil() {
    // debugger;
    this.formPerfil.value.ImagemUrl = this.varImagemSelecionada;
   // console.log('adicionarPerfil:', this.formPerfil.value.ImagemUrl);

    this.perfilService
      .cadastrarPerfil(this.formPerfil.value)
      .subscribe((res) => {
        //console.log('cadastrarPerfil: ', res);
      });
    this.show = false;
    window.location.reload();
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
