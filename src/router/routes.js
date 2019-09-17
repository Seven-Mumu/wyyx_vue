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
    component: Msite
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/things',
    component: Things
  },
  {
    path: '/shopcar',
    component: ShopCar
  },
  {
    path: '/personal',
    component: Personal
  }
]