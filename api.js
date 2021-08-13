const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.json());

// MySql
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root2',
  password: 'rootpass',
  database: 'bot_discord'
});

app.get('/', (req, res) => {
  res.send('Welcome to my API!');
});

app.get('/customers', (req, res) => {
  const sql = 'SELECT * FROM log';
  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send('Not result');
    }
  });
});

app.get('/customers/:id', (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM log WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send('Not result');
    }
  });
});

app.post('/add', (req, res) => {
  const sql = 'INSERT INTO log SET ?';

  const customerObj = {
    nombre: req.body.nombre,
    pais: req.body.fecha
  };

  connection.query(sql, customerObj, (error,{rows}) => {
    if (error) throw error;
    res.send(rows);
  });
});

app.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { name, fecha } = req.body;
  const sql = `UPDATE log SET nombre = '${name}', pais='${pais}' WHERE id =${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Empleado updated!');
  });
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM log WHERE id= ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send('Delete Empleado');
  });
});

// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log('Database server running!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));