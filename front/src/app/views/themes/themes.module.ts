import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { InterceptorService } from 'src/app/core/utils/intercept.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfisComponent } from './perfis/perfis.component';
import { Routes, RouterModule } from '@angular/router';
import { FullBannerComponent } from './full-banner/full-banner.component';
import { ListaComponent } from './lista/lista.component';
const routes: Routes = [
  {
    path: 'video',
    component: FullBannerComponent,
  },
];
@NgModule({
  declarations: [
    BaseComponent,
    PerfisComponent,
    ListaComponent,
    FullBannerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [BaseComponent, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [InterceptorService],
})
export class ThemesModule {}
