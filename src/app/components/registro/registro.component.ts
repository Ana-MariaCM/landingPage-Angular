import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

declare const Toastify: any;

interface ErroresFormulario {
  tipoIdentificacion: string;
  numeroIdentificacion: string;
  nombres: string;
  apellidos: string;
  correo: string;
  confirmarCorreo: string;
  genero: string;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  // Modelo del radio "Género"
  genero = '';

  // Mensajes de error mostrados bajo cada campo
  errores: ErroresFormulario = {
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    nombres: '',
    apellidos: '',
    correo: '',
    confirmarCorreo: '',
    genero: ''
  };

  //Reglas de validación 

  private validarCampoObligatorio(valor: string, mensaje: string): string {
    return valor.trim() === '' ? mensaje : '';
  }

  private validarLongitud(valor: string, min: number, max: number, mensaje: string): string {
    return (valor.length < min || valor.length > max) ? mensaje : '';
  }

  private validarFormatoCorreo(valor: string, mensaje: string): string {
    const correoRegex = /^[a-zA-Z0-9._%+-]+@unicauca\.edu\.co$/;
    return correoRegex.test(valor) ? '' : mensaje;
  }

  //Validaciones activadas al cambiar el foco blur

  validarTipoIdentificacion(select: HTMLSelectElement): void {
    this.errores.tipoIdentificacion =
      this.validarCampoObligatorio(select.value, 'El tipo de identificación es obligatorio');
  }

  validarNumeroIdentificacion(input: HTMLInputElement): void {
    this.errores.numeroIdentificacion =
      this.validarCampoObligatorio(input.value, 'El número de identificación es obligatorio');
  }

  validarNombres(input: HTMLInputElement): void {
    this.errores.nombres =
      this.validarLongitud(input.value, 1, 20, 'El nombre debe tener entre 1 y 20 caracteres');
  }

  validarApellidos(input: HTMLInputElement): void {
    this.errores.apellidos =
      this.validarLongitud(input.value, 1, 20, 'El apellido debe tener entre 1 y 20 caracteres');
  }

  validarCorreo(input: HTMLInputElement): void {
    this.errores.correo =
      this.validarFormatoCorreo(input.value, 'El correo debe tener el dominio @unicauca.edu.co');
  }

  //Dato que permite al usuario confirmar su registro
  validarConfirmarCorreo(correoInput: HTMLInputElement, confirmarInput: HTMLInputElement): void {
    this.errores.confirmarCorreo =
      (confirmarInput.value.trim() === '' || confirmarInput.value !== correoInput.value)
        ? 'Los correos electrónicos no coinciden'
        : '';
  }

  validarGenero(): void {
    this.errores.genero = this.genero ? '' : 'El género es obligatorio';
  }

  //Validación completa al dar clic en "Registrar"

  validarFormulario(
    tipoIdentificacion: HTMLSelectElement,
    numeroIdentificacion: HTMLInputElement,
    nombres: HTMLInputElement,
    apellidos: HTMLInputElement,
    correo: HTMLInputElement,
    confirmarCorreo: HTMLInputElement
  ): void {

    this.validarTipoIdentificacion(tipoIdentificacion);
    this.validarNumeroIdentificacion(numeroIdentificacion);
    this.validarNombres(nombres);
    this.validarApellidos(apellidos);
    this.validarCorreo(correo);
    this.validarConfirmarCorreo(correo, confirmarCorreo);
    this.validarGenero();

    const formularioValido = Object.values(this.errores).every(mensaje => mensaje === '');

    if (formularioValido) {
      this.mostrarMensajeExito();
      setTimeout(() => this.resetearFormulario(
        tipoIdentificacion, numeroIdentificacion, nombres, apellidos, correo, confirmarCorreo
      ), 2000);
    } else {
      alert('Por favor, complete correctamente el formulario.');
    }
  }

  private mostrarMensajeExito(): void {
    Toastify({
      text: 'Registro exitoso',
      duration: 3000,
      gravity: 'top',
      position: 'right',
      style: {
        background: 'rgba(0, 128, 0, 0.8)',
        color: '#fff',
        borderRadius: '12px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        padding: '12px 20px'
      },
      stopOnFocus: true
    }).showToast();
  }

  private resetearFormulario(
    tipoIdentificacion: HTMLSelectElement,
    numeroIdentificacion: HTMLInputElement,
    nombres: HTMLInputElement,
    apellidos: HTMLInputElement,
    correo: HTMLInputElement,
    confirmarCorreo: HTMLInputElement
  ): void {
    tipoIdentificacion.value = '';
    numeroIdentificacion.value = '';
    nombres.value = '';
    apellidos.value = '';
    correo.value = '';
    confirmarCorreo.value = '';
    this.genero = '';
    this.errores = {
      tipoIdentificacion: '', numeroIdentificacion: '', nombres: '',
      apellidos: '', correo: '', confirmarCorreo: '', genero: ''
    };
  }
}
