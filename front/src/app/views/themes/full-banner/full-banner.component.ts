import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-banner',
  templateUrl: './full-banner.component.html',
  styleUrls: ['./full-banner.component.css']
})
export class FullBannerComponent implements OnInit {

  constructor() { }
  varImagemSelecionada : any;


  ngOnInit() { 
    this.varImagemSelecionada = JSON.parse(localStorage.getItem('perfil'));
    console.log(this.varImagemSelecionada);
  }

}
