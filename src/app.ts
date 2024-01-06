import express from 'express';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors())
const port = 3088;

import { DbController} from './db.controller';

const dbCtrl = new DbController();


app.post('/query', async (req, res) => {
  res.send(
    await dbCtrl.query(req.body)
  );
});


app.post('/create_table', async (req, res) => {
  res.send(
    await dbCtrl.create_table(req.body)
  );
});


app.post('/mutate_table', async (req, res) => {

  try {

    res.send(
      await dbCtrl.mutate_table()
    );

  } catch (err) {
    
    res.json(err)
  }
});

app.post('/record', async (req, res) => {

  try {

    res.send(
      await dbCtrl.write_record(req.body)
    );

  } catch (err) {
    
    res.json(err)
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});


