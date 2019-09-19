import Msite from '../pages/Msite/Msite'
import Category from '../pages/Category/Category'
import Things from '../pages/Things/Things'
import ShopCar from '../pages/ShopCar/ShopCar'
import Personal from '../pages/Personal/Personal'

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
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/things',
    component: Things,
    meta: {
      isShowFooter: true
    }
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
    component: Personal
  }
]