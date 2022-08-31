import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación Calculadora';
  resultadoPadre: number;

  resultadoS(resultadoS: number){
    this.resultadoPadre = resultadoS;
  }

  resultadoR(resultadoR: number){
    this.resultadoPadre = resultadoR;
  }

  resultadoM(resultadoM: number){
    this.resultadoPadre = resultadoM;
  }

  resultadoD(resultadoD: number){
    this.resultadoPadre = resultadoD;
  }
}
