const express = require('express');
const router = express.Router();


// @route     GET api/contacts
// @desc      get all users contacts
// @access    Private
router.get('/', (req, res) => {
  res.send('get all contacts')
})

// @route     POST api/contacts
// @desc      add a new users contacts
// @access    Private
router.post('/', (req, res) => {
  res.send('add user')
})


// @route     PUT api/contacts/:id
// @desc      update users contacts
// @access    Private
router.put('/:id', (req, res) => {
  res.send('update user')
})

// @route     DELETE api/contacts/:id
// @desc      delete users contacts
// @access    Private
router.delete('/:id', (req, res) => {
  res.send('deleted user')
})


module.exports = router;