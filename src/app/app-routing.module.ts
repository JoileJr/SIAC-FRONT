import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {HomeComponent} from './pages/home/home.component';
import {SignUpComponent} from "./pages/sign-up/sign-up.component";
import { PacienteComponent } from './pages/paciente/paciente.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'pac',
    component: PacienteComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: '**', redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
