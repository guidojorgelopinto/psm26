const express = require('express');
const router = express.Router();
const Habitacion = require('../models/Habitacion');

// LISTAR
router.get('/', async (req, res) => {
  const habitaciones = await Habitacion.findAll();
  res.json(habitaciones);
});

// OBTENER UNA
router.get('/:id', async (req, res) => {
  const habitacion = await Habitacion.findByPk(req.params.id);
  res.json(habitacion);
});

// CREAR
router.post('/', async (req, res) => {
  const nueva = await Habitacion.create(req.body);
  res.json(nueva);
});

// ACTUALIZAR
router.put('/:id', async (req, res) => {
  await Habitacion.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Habitación actualizada' });
});

// ELIMINAR
router.delete('/:id', async (req, res) => {
  await Habitacion.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Habitación eliminada' });
});

module.exports = router;



