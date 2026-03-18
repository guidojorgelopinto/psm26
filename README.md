# PMS – Sistema de Gestión Hotelera

Proyecto completo compuesto por:
- Frontend en Angular
- Backend en Node.js + Express
- Base de datos MySQL

FRONTEND (Angular)

Instalación de dependencias:
npm install

Ejecutar en modo desarrollo:
ng serve

La aplicación estará disponible en:
http://localhost:4200

Conexión con el backend:
http://localhost:3000

Funcionalidades principales del frontend:
- Listado de habitaciones
- Crear nueva habitación
- Editar habitación existente
- Eliminar habitación
- Tabla con Angular Material
- Formularios reactivos (Reactive Forms)
- Validaciones de campos obligatorios
- Rutas modulares
- Lazy loading de componentes

Estructura del proyecto frontend:
src/
 ├── app/
 │   ├── modules/
 │   │   └── habitaciones/
 │   │       ├── pages/
 │   │       │   ├── lista/
 │   │       │   └── form/
 │   │       └── servicios/
 │   └── app.routes.ts
 ├── assets/
 └── main.ts

Scripts disponibles:
ng serve
ng build
ng test

BACKEND (Node.js + Express)

Instalación de dependencias:
npm install

Ejecutar el servidor:
npm start

El backend corre en:
http://localhost:3000

Endpoints principales:
GET    /habitaciones
POST   /habitaciones
GET    /habitaciones/:id
PUT    /habitaciones/:id
DELETE /habitaciones/:id

Estructura del backend:
backend/
 ├── src/
 │   ├── routes/
 │   │   └── habitaciones.js
 │   ├── controllers/
 │   │   └── habitacionesController.js
 │   ├── models/
 │   │   └── Habitacion.js
 │   ├── database/
 │   │   └── connection.js
 │   └── app.js
 └── package.json

Tecnologías backend:
- Node.js
- Express
- Sequelize (ORM)
- MySQL2

BASE DE DATOS (MySQL)

Nombre de la base de datos:
pms

Tabla: habitaciones

Estructura de la tabla:
id          INT AUTO_INCREMENT PRIMARY KEY
numero      VARCHAR(50)
tipo        VARCHAR(50)
estado      VARCHAR(50)
precio      DECIMAL(10,2)
createdAt   DATETIME
updatedAt   DATETIME

Ejemplo de creación de tabla:
CREATE TABLE habitaciones (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero VARCHAR(50),
  tipo VARCHAR(50),
  estado VARCHAR(50),
  precio DECIMAL(10,2),
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

Conexión MySQL utilizada por el backend:
host: localhost
user: root
password: (tu contraseña)
database: pms

LICENCIA

Este proyecto es de uso personal y educativo. Puedes modificarlo libremente.

AUTOR

Guido Jorge Lo Pinto  
Barcelona, España
