const express = require('express');
const app = express();
const port = 3001;

app.get('/servicio-javier', (req, res) => {
  res.json({ mensaje: "Respuesta desde Servicio: Hace poco tuve mi examen de ascenso a cinturon negro" });
});

app.listen(port, () => {
  console.log(`Servicio javier escuchando en http://localhost:${port}`);
});