const express = require('express');
const cors = require('cors');

const PORT = 3001;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (_, res) => {
  res.send({
    message: 'Is running!',
  });
});

const mockedDBTransactions = [];

app.get('/transactions', (req, res) => {
  res.send({
    data: mockedDBTransactions,
  });
});

app.post('/transaction', (req, res) => {

  const { name, description, value } = req.body;

  const localID = String(Date.now());
  const createdAt = Date.now();

  mockedDBTransactions.push({
    id: localID,
    name,
    description,
    value,
    createdAt,
  });

  res.send({
    message: 'Transaction added with success.',
  });
});

app.listen(PORT, () => {
  console.log(`API IS RUNNING AT ${PORT}`);
});
