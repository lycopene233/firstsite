const sha1    = require('sha1');
const express = require('express');
const router  = express.Router();

const UserModel     = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/', checkNotLogin, (req, res, next) => {
	res.render('signin');
});

router.post('/', checkNotLogin, (req, res, next) => {
	const name     = req.fields.name;
	const password = req.fields.password;

	try {
		if (name.length === 0) {
			throw new Error('enter your nickname please');
		}
		if (password.length === 0) {
			throw new Error('enter your password please');
		}
	} catch(e) {
		req.flash('error', e.message);
		return res.redirect('back');
	}

	UserModel.getUserByName(name)
		.then((user) => {
			if (! user) {
				req.flash('error', 'user does not exist');
				return res.redirect('back');
			}
			if(sha1(password) !== user.password) {
				req.flash('error', 'wrong nickname or password');
				return res.redirect('back');
			}
			req.flash('success', 'ログインしました');
			delete user.password;
			req.session.user = user;
			res.redirect('/posts');
		})
		.catch(next);
});

module.exports = router;
