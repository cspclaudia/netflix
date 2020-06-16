import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { InterceptorService } from 'src/app/core/utils/intercept.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfisComponent } from './perfis/perfis.component';
import { ListaComponent } from './lista/lista.component';

@NgModule({
  declarations: [BaseComponent, PerfisComponent, ListaComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [BaseComponent, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [InterceptorService],
})
export class ThemesModule {}
