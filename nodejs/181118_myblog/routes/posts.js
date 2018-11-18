const express = require('express');
const router  = express.Router();

const PostModel  = require('../models/posts');
const checkLogin = require('../middlewares/check').checkLogin;

// 所有用户或者特定用户的文章页
// GET
// /posts?author=xxx
router.get('/', (req, res, next) => {
  const author = req.query.author;

  PostModel.getPosts(author)
    .then((posts) => {
      res.render('posts', {
        posts: posts,
      });
    })
    .catch(next);
});

// 发表一篇文章
// POST
// /posts/create
router.post('/create', checkLogin, (req, res, next) => {
	const author  = req.session.user._id;
	const title   = req.fields.title;
	const content = req.fields.content;

	try {
		if (title.length === 0) {
			throw new Error('no title');
		} 
		if (content.length === 0) {
			throw new Error('no content');
		}	
	} catch (e) {
		req.flash('error', e.message);
		return res.redirect('back');
	}
 
	let post = {
		author: author,
		title: title,
		content: content,
	};

	PostModel.create(post)
		.then((result) => {
			console.log(result);
			post = result.ops[0];
			req.flash('success', '公開しました');
			res.redirect(`/posts/${post._id}`);
		})
		.catch(next);
});

// 发表文章页
// GET
// /posts/create
router.get('/create', checkLogin, (req, res, next) => {
	res.render('create');
});

// 单独一篇的文章页
// GET
// /posts/:postId
router.get('/:postId', (req, res, next) => {
	const postId = req.params.postId;

	Promise.all([
		PostModel.getPostById(postId),
		PostModel.incPv(postId)
	])
    .then((result) => {
    	const post = result[0];
    	if (! post) {
    		throw new Error('post does not exist.');
    	}

    	res.render('post', {
    		post: post,
    	});
    })
    .catch(next);
});

// 更新文章页
// GET
// /posts/:postId/edit
router.get('/:postId/edit', checkLogin, (req, res, next) => {
	const postId = req.params.postId;
	const author = req.session.user._id;

	PostModel.getRawPostById(postId)
		.then((post) => {
			if (! post) {
				throw new Error('post does not exist');
			}
			if (author.toString() !== post.author._id.toString()) {
				throw new Error('not authorized');
			}
			res.render('edit', {
				post: post,
			});
		})
		.catch(next);
});

// 更新一篇文章
// POST
// /posts/:postId/edit
router.post('/:postId/edit', checkLogin, (req, res, next) => {
	const postId = req.params.postId;
	const author = req.session.user._id;
	const title = req.fields.title;
	const content = req.fields.content;

	try {
		if (title.length === 0) {
			throw new Error('no title');
		} 
		if (content.length === 0) {
			throw new Error('no content');
		}	
	} catch (e) {
		req.flash('error', e.message);
		return res.redirect('back');
	}

	PostModel.getRawPostById(postId)
		.then((post) => {
			if (! post) {
				throw new Error('post does not exist');
			}
			if (author.toString() !== post.author._id.toString()) {
				throw new Error('not authorized');
			}
			PostModel.updatePostById(postId, {title: title, content: content})
				.then(() => {
					req.flash('success', '更新しました。');
					res.redirect(`/posts/${postId}`);
				})
				.catch(next);
		});
});

// 删除一篇文章
// GET
// /posts/:postId/remove
router.get('/:postId/remove', checkLogin, (req, res, next) => {
	const postId = req.params.postId;
	const author = req.session.user._id;

	PostModel.getRawPostById(postId)
		.then((post) => {
			if (! post) {
				throw new Error('post does not exist');
			}
			if (author.toString() !== post.author._id.toString()) {
				throw new Error('not authorized');
			}
			PostModel.delPostById(postId)
				.then(() => {
					req.flash('success', '削除しました。');
					res.redirect(`/posts`);
				})
				.catch(next);
		});
});

module.exports = router;
