const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// create the customer table
connection.query(`
  CREATE TABLE Customer (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    dob DATE,
    address VARCHAR(255),
    postcode_id INT,
    FOREIGN KEY (postcode_id) REFERENCES Postcode(id)
  );
`, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Customer table created`);
  }
});

// create the postcode table
connection.query(`
  CREATE TABLE Postcode (
    id INT PRIMARY KEY AUTO_INCREMENT,
    state VARCHAR(255),
    postcode INT
  );
`, (err, results) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Postcode table created`);
  }
});

// close the connection
connection.end();
