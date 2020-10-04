import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Page from '../views/Page/Page.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/Login',
    name: 'Login',
    component: () => import('../views/Login/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/RegisteredPage',
    name: 'RegisteredPage',
    component: () => import('../views/RegisteredPage/RegisteredPage.vue'),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/',
    component: Page,
    children: [{
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: 'Article',
        name: 'Article',
        component: () => import('../views/Article/Article.vue')
      },
      {
        path: 'Exit',
        name: 'Exit',
        component: () => import('../views/Exit/Exit.vue')
      },
      {
        path: 'Export',
        name: 'Export',
        component: () => import('../views/Export/Export.vue')
      },
      {
        path: 'Firstpage',
        name: 'Firstpage',
        component: () => import('../views/Firstpage/Firstpage.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'Lable',
        name: 'Lable',
        component: () => import('../views/Lable/Lable.vue')
      },
      {
        path: 'Published',
        name: 'Published',
        component: () => import('../views/Published/Published.vue'),
        meta: {
          title: '已发布'
        }
      },
      {
        path: 'Statistical',
        name: 'Statistical',
        component: () => import('../views/Statistical/Statistical.vue')
      },
      {
        path: 'Upload',
        name: 'Upload',
        component: () => import('../views/Upload/Upload.vue')
      },
      {
        path: 'Looklook',
        name: 'Looklook',
        component: () => import('../views/Looklook/Looklook.vue')
      },
      {
        path: 'EditorPage',
        name: 'EditorPage',
        component: () => import('../views/EditorPage/EditorPage.vue'),
        meta: {
          title: '首页'
        }
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router