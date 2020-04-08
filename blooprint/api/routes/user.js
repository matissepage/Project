const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/login');
const calendarCtrl = require('../controllers/event')

router.post('/signup', userCtrl.signup);
router.post('/signin', userCtrl.login);
router.post('/calendar', calendarCtrl.recupEvent);
router.post('/calendarCreate', calendarCtrl.createEvent);
router.post('/delete', userCtrl.deleteUser)

module.exports = router;