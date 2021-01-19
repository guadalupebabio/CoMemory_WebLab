/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require('express');

// import models so we can interact with the database
const User = require('./models/user');
const Board = require('./models/board');

// import authentication library
const auth = require('./auth');

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

// router.get("/dates", (req, res) => {
//   res.send(data.dates);
// });

// router.post("/date", (req, res) => {
//   const mydate = {
//     _id: data.dates.length,
//     creator_name: MY_NAME,
//     content: req.body.content,
//   };
//   data.dates.push(mydate);
//   res.send(mydate);
// });

router.get("/boards", (req, res) => {
  Board.find({}).then((boards) => res.send(boards));
});

router.post("/board", (req, res) => {
  const newBoard = new Board({
    honoree_name: req.body.honoree_name,
    date: req.body.date,
    place: req.body.place,
    msg: req.body.msg,
  });

  newBoard.save().then((board) => res.send(board));
});

//initialize socket
const socketManager = require('./server-socket');

router.post('/login', auth.login);
router.post('/logout', auth.logout);
router.get('/whoami', (req, res) => {
	if (!req.user) {
		// not logged in
		return res.send({});
	}

	res.send(req.user);
});

router.post('/initsocket', (req, res) => {
	// do nothing if user not logged in
	if (req.user) socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
	res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// router.post("/newboard", (req, res) => {

// });

// anything else falls to this "not found" case
router.all('*', (req, res) => {
	console.log(`API route not found: ${req.method} ${req.url}`);
	res.status(404).send({ msg: 'API route not found' });
});

module.exports = router;
