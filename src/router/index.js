import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', name: 'home', component: _import('home/index') },
    { path: '/sign', name: 'sign', component: _import('sign/index') },
    { path: '/personal', name: 'personal', component: _import('personal/index') },
    { path: '/album', name: 'album', component: _import('album/index') },
    { path: '/album/albumInfo', name: 'albumInfo', component: _import('album/albumInfo') },
    { path: '/album/upload', name: 'uploadAlbum', component: _import('album/upload') },
    { path: '/blog', name: 'blog', component: _import('blog/index') },
    { path: '/blog/blogInfo/:id', name: 'blogInfo', component: _import('blog/blogInfo') },
    { path: '/blog/writeBlog', name: 'writeBlog', component: _import('blog/writeBlog') },
    { path: '/life', name: 'life', component: _import('life/index') },
    { path: '/life/lifeInfo/:id', name: 'lifeInfo', component: _import('life/lifeInfo') },
    { path: '/life/writeLife', name: 'writeLife', component: _import('life/writeLife') },


    { path: '/test', name: 'test', component: _import('test')},

    { path: '*', name: '404', component: _import('errorPage/404') }
  ]
})
