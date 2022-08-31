import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent{
  
  operandoA: number;
  operandoB: number;

  @Output() resultadoSuma = new EventEmitter<number>();
  sumar():void{
    let resultadoS = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(resultadoS)
  }
  
  @Output() resultadoResta = new EventEmitter<number>();
  restar():void{
    let resultadoR = this.operandoA - this.operandoB;
    this.resultadoResta.emit(resultadoR)
  }

  @Output() resultadoMulti = new EventEmitter<number>();
  multiplicar():void{
    let resultadoM = this.operandoA * this.operandoB;
    this.resultadoMulti.emit(resultadoM)
  }

  @Output() resultadoDivi = new EventEmitter<number>();
  dividir():void{
    let resultadoD = this.operandoA / this.operandoB;
    this.resultadoDivi.emit(resultadoD)
  }

}
