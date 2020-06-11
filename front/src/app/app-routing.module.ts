import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/autenticacao/autenticacao.guard';
// import { BaseComponent } from './views/themes/base/base.component';

const routes: Routes = [
  {
    path: 'Auth',
    loadChildren: () =>
      import('./views/pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    // component: BaseComponent,
    canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'Mensagens',
    //     loadChildren: () =>
    //       import('./views/pages/mensagens/mensagens.module').then(
    //         (m) => m.MensagensModule
    //       ),
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
