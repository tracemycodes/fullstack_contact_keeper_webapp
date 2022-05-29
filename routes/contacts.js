const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contacts = require('../models/Contacts');


// @route     GET api/contacts
// @desc      get all users contacts
// @access    Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contacts.find({ user: req.user.id }).sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
})

// @route     POST api/contacts
// @desc      add a new users contacts
// @access    Private
router.post('/', [auth, [
  check('name', 'Name is required').not().isEmail()
]], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, phone, type } = req.body;

  try {
    const newContact = new Contacts({
      name,
      email,
      phone,
      type,
      user: req.user.id
    });

    const contact = await newContact.save();
    res.json(contact)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
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