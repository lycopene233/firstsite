const fs = require('fs');
const path = require('path');
const sha1 = require('sha1');
const express = require('express');
const router  = express.Router();

const UserModel     = require('../models/users');
const checkNotLogin = require('../middlewares/check').checkNotLogin;

router.get('/', checkNotLogin, (req, res, next) => {
	res.render('signup');
});

router.post('/', checkNotLogin, (req, res, next) => {
	const name   = req.fields.name;
	const gender = req.fields.gender;
	const bio    = req.fields.bio;
	const avatar = req.files.avatar.path.split(path.sep).pop();

	let password   = req.fields.password;
	const repassword = req.fields.repassword;

	try {
		if (name.length < 1 || name.length > 10) {
			throw new Error('name too short or too long');
		}
		if (!['m', 'f', 'x'].includes(gender)) {
			throw new Error('gender unexpected');
		}
		if (bio.length < 1 || bio.length > 30) {
			throw new Error('bio too short or too long');
		}
		if (!req.files.avatar.name) {
    		throw new Error('no avatar');
    	}
		if (password.length < 6) {
			throw new Error('password too short');
		}
		if (repassword !== password) {
			throw new Error('two passwords do not match');
		}
	} catch (e) {
		fs.unlink(req.files.avatar.path);
		req.flash('error', e.message);
		return res.redirect('/signup');
	}

	password = sha1(password);

	let user = {
		name: name,
		password: password,
		gender: gender,
		bio: bio,
		avatar: avatar,
	};

	UserModel.create(user)
		.then((result) => {
			user = result.ops[0]; //插入 mongodb 后的值，包含 _id
			delete user.password;
			req.session.user = user;
			req.flash('success', '登録完了');
			res.redirect('/posts');
		})
		.catch((e) => {
			fs.unlink(req.files.avatar.path);
			if (e.message.match('dublicate key')) {
				req.flash('error', 'username already used');
				return res.redirect('/signup');
			}
			next(e);
		});
});

module.exports = router;
