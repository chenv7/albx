const express = require('express');
const router = express.Router();
const pagesController = require('./controllers/pagesController');
const userController = require('./controllers/userController.js');
const postsController = require('./controllers/postsController');
const cateController = require('./controllers/cateController');
const uploadController = require('./controllers/uploadController')
//读取views中的页面
router.get('/',pagesController.getIndexPage)
  /*     .get('/list',pagesController.getListPage)
      .get('/detail',pagesController.getDetailPage) */

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
      //数据收据
      .get('/getAllPost',postsController.getAllPost)
      //增加分类数据收集
      .get('/getAllCate',cateController.getAllCate)
      //添加到数据库
      .post('/addPost',postsController.addPost)
      //文件数据
      .post('/uploadFile',uploadController.uploadFile)
      //修改----先获取id
      .get('/getPostById',postsController.getPostById)

      //实现文章编辑
      .post('/editPostById',postsController.editPostById)
      .get('/deleteById',postsController.deleteById)

      //实现分类目录的增删改
      //实现分类文章修改
      .post('/editCate',cateController.editCate)
      //实现分类文章增加
      .post('/addCate',cateController.addCate)
      //实现分类文章删除
      .get('/delCateById',cateController.delCateById)
module.exports = router;