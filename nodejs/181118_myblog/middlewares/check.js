module.exports = {
	checkLogin : (req, res, next) => {
		if (! req.session.user) {
			req.flash('error', 'ログインしてください。');
			return res.redirect('/signin');
		}
		next();
	},
	checkNotLogin : (req, res, next) => {
		if(req.session.user) {
			req.flash('error', 'すでにログインしています。');
			return res.redirect('back'); // 先の画面に戻る
		}
		next();
	},
};
