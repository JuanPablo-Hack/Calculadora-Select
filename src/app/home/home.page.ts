import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  resultado = '';
  valor2: string;
  valor1: string;
  operacion: string;
  sumar: boolean;
  restar: boolean;

  constructor() {}

  Calcular() {
    if (!!this.valor1 && !!this.valor2) {
      let s = '';
      if (this.operacion === 'sumar') {
        const c = parseFloat(this.valor1) + parseFloat(this.valor2);
        s = s + this.valor1 + '+' + this.valor2 + '=' + c + '<br>';
      }
      if (this.operacion === 'restar') {
        const c = parseFloat(this.valor1) - parseFloat(this.valor2);
        s = s + this.valor1 + '-' + this.valor2 + '=' + c + '<br>';
      }
      if (this.operacion === 'multiplicar') {
        const c = parseFloat(this.valor1) * parseFloat(this.valor2);
        s = s + this.valor1 + '*' + this.valor2 + '=' + c + '<br>';
      }
      if (this.operacion === 'dividir') {
        const c = parseFloat(this.valor1) / parseFloat(this.valor2);
        s = s + this.valor1 + '/' + this.valor2 + '=' + c + '<br>';
      }
      this.resultado = '<b>' + s + '</b>';
    }
  }
}
