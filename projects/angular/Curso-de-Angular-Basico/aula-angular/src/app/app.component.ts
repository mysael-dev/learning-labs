import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Importando FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Indica que é um Standalone Component
  imports: [CommonModule, FormsModule], // Adicione CommonModule aqui
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 10';
  nome = '';
  vetor = ['Tv', 'Cadeira', 'Sofá', 'Mesa', 'Celular'];
}

