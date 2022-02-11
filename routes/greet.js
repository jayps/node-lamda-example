const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const name = req.query.name || 'World';

    res.send({message: `Hello, ${name}!`});
});

module.exports = router;