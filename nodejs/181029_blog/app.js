var express = require('express'),
    app = express(),
    post = require('./routes/post');

//middleware
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.methodOverride());

app.set('views', 'views');
app.set('view engine', 'ejs');

//scrf対策
/*
app.use(express.cookieParser());
app.use(express.session({secret: 'myblog'}));
app.use(express.csrf());
app.use((req, res, next) => {
	res.locals.csrftoken = res.csrfToken();
	next();
});
*/

app.use((err, req, res, next) => {
	res.send(err.message);
})

//routing
app.get('/', post.index); //記事一覧
app.get('/posts/:id([0-9]+)', post.show); //詳細画面
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id([0-9]+)/edit', post.edit);
app.post('/posts/:id([0-9]+)/update', post.update); //app.putはうまくいかない
app.post('/posts/:id([0-9]+)/destroy', post.destroy);

app.listen(3000, () => {
	console.log('server starting...');
});
