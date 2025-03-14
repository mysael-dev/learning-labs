import { Component } from '@angular/core';
import { Produto } from '../../produto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  p1: Produto = new Produto('Sardinha', 'jose@sardinhas.com', 3, 0.10, new Date('2020-01-01'))

}
