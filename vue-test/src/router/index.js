import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)
// import Scss from '@/components/scss'
//  路由懒加载
// const Scss = () => import('../components/scss.vue')
//  封装一个方法
function load(component) {
  return () => import(`@/components/${component}`)
}

//  配置子路由嵌套
// const soo = {
//   children: [
//     {
//       path: "son",
//       component: load("son")
//     },
//   ]
// }



const routes = [
  {
    path: '',
    redirect: '/home',
    meta: {
      title: "主页"
    }
  },
  {
    path: '/scss',
    component: load('scss'),
    meta: {
      title: "scss"
    },
    children: [
      {
        path: "son/:userid",
        component: load('son'),
        meta: {
          title: "son"
        },
      }
    ]
  },
  {
    path: "/home",
    component: load('Home'),
    meta: {
      title: "主页"
    },
    children: [
      {
        path: "scss",
        component: load('scss'),
        meta: {
          title: "scss"
        },
      },
      {
        path: "son/:userid",
        component: load('son'),
        meta: {
          title: "son"
        },
      },
      {
        path: "son1",
        component: load('son1'),
        meta: {
          title: "son1"
        },
      },
    ]
  },

]

const router = new vueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,
  linkActiveClass: "active"
})

export default router

// const router = new Router({
//   routers,
//   mode: "history",
//   base: process.env.BASE_URL,
//   linkActiveClass: "active"
// })

//  路由守卫
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  // console.log(to)
  next();
})

//  后置钩子
router.afterEach((to, from) => {
  console.log(to)
})