const path       = require('path');
const express    = require('express');
const session    = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash      = require('connect-flash');
const config     = require('config-lite')(__dirname);
const routes     = require('./routes');
const pkg        = require('./package');

const app        = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
	name:   config.session.key, // 保存session idの名前
	secret: config.session.secret, // 过设置secret来计算hash值，使产生的signedCookie防篡改
	resave: true, // 强制更新session
	saveUninitialized: false, // 设置为false，强制创建一个session，即使用户未登录
	cookie: {
		maxAge: config.session.maxAge,
	},
	store: new MongoStore({ // 将session存储到mongodb
		url: config.mongodb
	}),
}));

app.use(flash());

app.use(require('express-formidable')({
	uploadDir: path.join(__dirname, 'public/img'),
	keepExtensions: true
}));

app.locals.blog = {
	title: pkg.name,
	description: pkg.description,
};

app.use((req, res, next) => {
	res.locals.user    = req.session.user;
	res.locals.success = req.flash('success').toString();
	res.locals.error   = req.flash('error').toString();
	next();
});

routes(app);

app.use((err, req, res, next) => {
	console.log(err);
	req.flash('error', err.message);
	res.redirect('/posts');
});

app.listen(config.port, () => {
	console.log(`${pkg.name} listening on port ${config.port}`);
});
