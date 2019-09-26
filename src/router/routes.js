// import Msite from '../pages/Msite/Msite'
// import Category from '../pages/Category/Category'
// import Things from '../pages/Things/Things'
// import ShopCar from '../pages/ShopCar/ShopCar'
// import Personal from '../pages/Personal/Personal'
// import Search from '../pages/Msite/Search/Search'
// import PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin'
// import EmailLogin from '../pages/Personal/EmailLogin/EmailLogin'
// import Zxj from '../pages/Things/Zxj/Zxj'
// import Find from '../pages/Things/Find/Find'


const Msite = () => import('../pages/Msite/Msite')
const Category = () => import('../pages/Category/Category')
const Things = () => import('../pages/Things/Things')
const ShopCar = () => import('../pages/ShopCar/ShopCar')
const Personal = () => import('../pages/Personal/Personal')
const Search = () => import('../pages/Msite/Search/Search')
const PhoneLogin = () => import('../pages/Personal/PhoneLogin/PhoneLogin')
const EmailLogin = () => import('../pages/Personal/EmailLogin/EmailLogin')
const Zxj = () => import('../pages/Things/Zxj/Zxj')
const Find = () => import('../pages/Things/Find/Find')

import CategoryList from '../pages/Category/categoryList/CategoryList'

export default [{
    path: '/',
    redirect: '/msite'
  },
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    },
    children: [{
      path: '/category/shop/:id',
      component: CategoryList,
      props: true
    }]
  },
  {
    path: '/things',
    component: Things,
    children: [{
        path: '/things/find',
        component: Find,
        meta: {
          isShowFooter: true
        },
      },
      {
        path: '/things',
        redirect: '/things/find'
      },
      {
        path: '/things/zxj',
        component: Zxj,
        // meta: {
        //   isShowFooter: true
        // },
      }
    ]
  },

  {
    path: '/shopcar',
    component: ShopCar,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal,
    children: [{
        path: '/personal/phonelogin/:id',
        component: PhoneLogin,
        props: true
      },
      {
        path: '/personal/emaillogin',
        component: EmailLogin
      }
    ]
  }
]