const Habitacion = require('../models/Habitacion');

module.exports = {

  async listar(req, res) {
    try {
      const habitaciones = await Habitacion.findAll();
      res.json(habitaciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async crear(req, res) {
    try {
      const habitacion = await Habitacion.create(req.body);
      res.json(habitacion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

};
