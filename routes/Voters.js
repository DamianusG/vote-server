  const express = require("express");
  const router = express.Router();
  
  // Voter Routes
  router.post('/', (req, res) => {
    res.send('create voters')
  });
  
  router.get('/', (req, res) => {
    res.send('get all voters data')
  });

  router.get('/:idv', (req, res) => {
    const id_voter = req.params.idv;
    res.send(`get voters data by id_voter = ${id_voter}.`)
  });
  
  router.put('/:idv', (req, res) => {
    const id_voter = req.params.idv;
    res.send(`update voters data by id_voter = ${id_voter}.`)
  });

  router.delete('/:idv', (req, res) => {
    const id_voter = req.params.idv;
    res.send(`delete voters data by id_voter = ${id_voter}.`)
  });

  module.exports = router;