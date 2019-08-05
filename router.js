const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const userController = require('./controllers/userController.js');
//读取views中的页面
router.get('/',pagesController.getIndexPage)
      .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage)

// 后台管理页面，统一添加admin做为前缀
      .get('/admin',pagesController.getAdminPage)
      .get('/admin/categories',pagesController.getCategoriesPage)
      .get('/admin/comments',pagesController.getCommentsPage)
      .get('/admin/login',pagesController.getLoginPage)
      .get('/admin/nav-menus',pagesController.getNavMenusPage)
      .get('/admin/password-reset',pagesController.getPasswordResetPage)
      .get('/admin/post-add',pagesController.getPostAddPage)
      .get('/admin/posts',pagesController.getPostsPage)
      .get('/admin/profile',pagesController.getProfilePage)
      .get('/admin/slides',pagesController.getSlidesPage)
      .get('/admin/settings',pagesController.getSettingsPage)
      .get('/admin/users',pagesController.getUsersPage)

      .post('/Login',userController.login)


module.exports = router;