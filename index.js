const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send({ hi: 'Harvey' });
});

// dynamic port binding
const PORT = process.env.PORT || 5000;
app.listen(PORT);

// specify a start strict
