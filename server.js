const express = require('express');
const app = express();
const db = require('./database/db'); // importing the database file

app.use(express.json());

app.get('/state/:postcode', (req, res) => {
    const postcode = req.params.postcode;
    db.query(`SELECT state FROM Postcode WHERE postcode = ${postcode}`, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error retrieving state');
        } else {
            res.status(200).send(results[0]);
        }
    });
});

app.post('/save', (req, res) => {
    const { name, dob, address, postcode, state } = req.body;
    db.query(`INSERT INTO Customer (name, dob, address, postcode_id) VALUES ('${name}', '${dob}', '${address}', (SELECT id FROM Postcode WHERE postcode = ${postcode}))`, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error saving data');
        } else {
            res.status(200).send('Data saved successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

