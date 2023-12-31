import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './angular-material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalificacionesComponent } from './dashboard/calificaciones/calificaciones.component';
import { LibrosComponent } from './dashboard/libros/libros.component';
import { LibrosListaComponent } from './dashboard/libros/libros-lista/libros-lista.component';
import { EditorialComponent } from './dashboard/editorial/editorial.component';
import { EditorialListaComponent } from './dashboard/editorial/editorial-lista/editorial-lista.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalificacionesComponent,
    LibrosComponent,
    LibrosListaComponent,
    EditorialComponent,
    EditorialListaComponent,
  ],
  imports: [
    BrowserModule,    
    MaterialModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: DashboardComponent,
        children:[
          {path: 'calificaciones', component: CalificacionesComponent},
          {path: 'librolista', component: LibrosListaComponent},
          {path: 'editoriallista', component: EditorialListaComponent}
  
        ]},      
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', component: DashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
