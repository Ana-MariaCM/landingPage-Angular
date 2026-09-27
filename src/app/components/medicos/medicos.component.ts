import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Especialidad {
  clave: string;
  nombre: string;
  descripcion: string;
}

export interface Medico {
  nombre: string;
  especialidad: string;
  motivacion: string;
  imagen: string;
}

@Component({
  selector: 'app-medicos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medicos.component.html',
  styleUrl: './medicos.component.css'
})
export class MedicosComponent {

  //Especialidades disponibles en la clínica
  especialidades: Especialidad[] = [
    {
      clave: 'terapia-neural',
      nombre: 'Terapia Neural',
      descripcion: 'La Terapia Neural regula el sistema nervioso mediante anestésicos locales aplicados en puntos específicos del cuerpo.'
    },
    {
      clave: 'quiropraxia',
      nombre: 'Quiropraxia',
      descripcion: 'La Quiropraxia se enfoca en el diagnóstico y tratamiento manual de trastornos del sistema neuromusculoesquelético, especialmente de la columna vertebral.'
    },
    {
      clave: 'fisioterapia',
      nombre: 'Fisioterapia',
      descripcion: 'La Fisioterapia utiliza agentes físicos (ejercicio, calor, electroterapia, entre otros) para prevenir, tratar y rehabilitar lesiones o enfermedades.'
    },
    {
      clave: 'nutricion',
      nombre: 'Nutrición y Dietética Terapéutica',
      descripcion: 'La Nutrición y Dietética Terapéutica diseña planes alimenticios personalizados para tratar y prevenir enfermedades a través de la alimentación.'
    }
  ];

  //Médicos de la clínica
medicos: Medico[] = [
  {
    nombre: 'Dr. Juan Ramírez',
    especialidad: 'Especialista en Fisioterapia Deportiva',
    motivacion: 'Comprometido con tu recuperación',
    imagen: '/imagenes/medico4.jpg'
  },
  {
    nombre: 'Dr. Carlos Gómez',
    especialidad: 'Especialista en Quiropraxia',
    motivacion: 'La salud es fundamental',
    imagen: '/imagenes/medico3.jpg'
  },
  {
    nombre: 'Dra. Carla Restrepo',
    especialidad: 'Especialista en Nutrición y dietética terapéutica',
    motivacion: 'Un alimento sano alarga la vida',
    imagen: '/imagenes/medico1.jpg'
  },
  {
    nombre: 'Dra. María Fernanda López',
    especialidad: 'Especialista en Terapia Neural',
    motivacion: 'Tu bienestar es mi prioridad',
    imagen: '/imagenes/medico2.jpg'
  },
  {
    nombre: 'Dra. Andrea Torres',
    especialidad: 'Especialista en Quiropraxia',
    motivacion: 'Movimiento sin dolor, vida sin límites',
    imagen: '/imagenes/medico5.jpg'
  },
  {
    nombre: 'Dra. Valentina Ortiz',
    especialidad: 'Especialista en Nutrición y Dietética Terapéutica',
    motivacion: 'Comer bien es la mejor medicina',
    imagen: '/imagenes/medico6.jpg'
  },
  {
    nombre: 'Dr. Santiago Mendoza',
    especialidad: 'Especialista en Fisioterapia',
    motivacion: 'Recuperando tu movilidad paso a paso',
    imagen: '/imagenes/medico7.jpg'
  }
];

  //Especialidad actualmente seleccionada y su descripción
  descripcionSeleccionada: string | null = null;

  //Mostrar la descripción de la especialidad seleccionada
  seleccionarEspecialidad(especialidad: Especialidad): void {
    this.descripcionSeleccionada = especialidad.descripcion;
  }
}
