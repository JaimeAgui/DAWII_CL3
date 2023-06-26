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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalificacionesComponent,
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
  
        ]},      
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', component: DashboardComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
