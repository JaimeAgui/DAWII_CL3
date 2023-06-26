import { Component } from '@angular/core';

@Component({
  selector: 'app-calificaciones',
  templateUrl: './calificaciones.component.html',
  styleUrls: ['./calificaciones.component.scss']
})
export class CalificacionesComponent {
  resultado = ""
  Promedio = {
    numero1: null,
    numero2: null,
    numero3: null
  }

  calcularPromedio(){
    let promedio = Number(this.Promedio.numero1) + Number(this.Promedio.numero2) + Number(this.Promedio.numero3)
    this.resultado = "El resultado es: " + promedio / 3;
  }
}
