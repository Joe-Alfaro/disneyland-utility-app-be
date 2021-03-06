const router = require('express').Router();
const cron = require('node-cron');

const Rides = require('../models/ridesModel.js');

Rides.updateWaitTimes()
cron.schedule('* * * * *', () => {
  Rides.updateWaitTimes()
    .catch(error => console.log("Cron: ", error.message));
});

router.get('/rides', (req,res) => {
  Rides.getAll()
    .then(rides => res.status(200).json(rides))
    .catch(error => console.log("router.get('/')", error.message))
})

module.exports = router;
