import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { EditarComponent } from './components/editar/editar.component';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenusitoComponent } from './components/menusito/menusito.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'menusin', component: MenusitoComponent},
  {path: 'consulta', component: ConsultaComponent},
  {path: 'ingreso', component: IngresoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
