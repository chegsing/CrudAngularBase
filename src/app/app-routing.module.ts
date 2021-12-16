import { EditarTurnosComponent } from './components/turnos/editar-turnos/editar-turnos.component';
import { AgregarTurnosComponent } from './components/turnos/agregar-turnos/agregar-turnos.component';
import { ListaTurnosComponent } from './components/turnos/lista-turnos/lista-turnos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ListaTurnosComponent
  },
  {
    path: 'agregar_turnos',
    component: AgregarTurnosComponent
  },
  {
    path: 'editar_turnos/:id',
    component: EditarTurnosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
