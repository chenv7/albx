const express = require('express');
const router = express.Router();


//views里得页面渲染
router.get('', (req, res) => {
	res.render('index.ejs');
});
router.get('/detail', (req, res) => {
	res.render('detail.ejs');
});
router.get('/list', (req, res) => {
	res.render('list.ejs');
});

//views/admin里的页面渲染
router.get('/admin/categories', (req, res) => {
	res.render('admin/categories.ejs');
});
router.get('/admin/comments', (req, res) => {
	res.render('admin/comments.ejs');
});
router.get('/admin/index', (req, res) => {
	res.render('admin/index.ejs');
});
router.get('/admin/login', (req, res) => {
	res.render('admin/login.ejs');
});
router.get('/admin/nav-menus', (req, res) => {
	res.render('admin/nav-menus.ejs');
});
router.get('/admin/password-reset', (req, res) => {
	res.render('admin/password-reset.ejs');
});
router.get('/admin/posts', (req, res) => {
	res.render('admin/posts.ejs');
});
router.get('/admin/post-add', (req, res) => {
	res.render('admin/post-add.ejs');
});
router.get('/admin/profile', (req, res) => {
	res.render('admin/profile.ejs');
});
router.get('/admin/settings', (req, res) => {
	res.render('admin/settings.ejs');
});
router.get('/admin/slides', (req, res) => {
	res.render('admin/slides.ejs');
});
router.get('/admin/users', (req, res) => {
	res.render('admin/users.ejs');
});





module.exports = router;