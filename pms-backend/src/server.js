const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API PMS funcionando');
});

// Rutas
const habitacionesRoutes = require('./routes/habitaciones');
app.use('/habitaciones', habitacionesRoutes);

// IMPORTANTE: importar sequelize
const sequelize = require('./database/db');

// Sincronizar BD
sequelize.sync({ force: false })
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar BD:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
