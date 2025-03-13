import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // ✅ Importando FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Indica que é um Standalone Component
  imports: [CommonModule, FormsModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 10';
  nome = '';
  vetor = ['Tv', 'Cadeira', 'Sofá', 'Mesa', 'Celular'];
  add(){
    let n = this.nome;
    this.vetor.push(n);
    this.nome = '';
  };

  remover(x: number) {
    this.vetor.splice(x,1) //X vai até o indice, e 1 remove apenas 1 item (ele mesmo), se colocasse 2, removeria ele e o próximo
  }
}

