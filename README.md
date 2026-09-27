# Asociación de Médicos - Landing Page (Angular)

Proyecto Angular (standalone components) que implementa la landing page de la clínica,
migrada desde la versión HTML + Bootstrap + JavaScript del taller anterior.

## Cómo ejecutar el proyecto

```bash
npm install
npm start
```

Luego abre `http://localhost:4200` en el navegador.

## Estructura de componentes

| Componente               | Ubicación                                   | Corresponde a |
|---------------------------|----------------------------------------------|---------------|
| `app-header`               | `src/app/components/header`                 | Encabezado |
| `app-navbar`                | `src/app/components/navbar`                  | Barra de navegación |
| `app-carrusel`              | `src/app/components/carrusel`                | Sección 1 (carrusel de promociones) |
| `app-medicos`               | `src/app/components/medicos`                 | Sección 2 (barra lateral de especialidades + cartas de médicos) |
| `app-registro`              | `src/app/components/registro`                | Sección 3 (formulario de registro con validaciones en TypeScript) |
| `app-footer`                | `src/app/components/footer`                  | Pie de página |

Cada componente está compuesto por su vista HTML, hoja de estilos CSS y lógica en TypeScript.
Las imágenes utilizadas están en `public/imagenes` (Angular las publica en la raíz del sitio).

## Notas

- Bootstrap 5, Font Awesome y Toastify se cargan vía CDN en `src/index.html`.
- El componente `app-registro` reemplaza el antiguo `validacion.js`: las validaciones se
  ejecutan como métodos TypeScript de la clase `RegistroComponent`, activados con `(blur)`
  en cada campo y con `(click)` en el botón "Registrar".
- El dato de confirmación de registro es la repetición del correo electrónico
  (`confirmar-correo`), validado contra el campo `correo-electronico`.
