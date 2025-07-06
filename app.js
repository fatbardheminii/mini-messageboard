const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const assetsPath = path.join(__dirname, "public");
const messageRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use('/', messageRouter);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.use((err, req, res, next) => {
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));