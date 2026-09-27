import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Promocion {
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})
export class CarruselComponent {
  //Promociones de la clínica
  promociones: Promocion[] = [
    { imagen: '/imagenes/Gemini_Generated_Image_fll73ifll73ifll7.jpg', alt: 'Promo 1' },
    { imagen: '/imagenes/Gemini_Generated_Image_sohmgzsohmgzsohm.jpg', alt: 'Promo 2' },
    { imagen: '/imagenes/Gemini_Generated_Image_wc4yvfwc4yvfwc4y.jpg', alt: 'Promo 3' }
  ];
}
