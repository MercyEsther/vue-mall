import Vue from 'vue';
import Router from 'vue-router';

const App = () => import("../pages/App");
const Recommend = () => import("../pages/Recommend");
const Clothing = () => import("../pages/Clothing");
const Furniture = () => import("../pages/Furniture");
const Food = () => import("../pages/Food");
const Product = () => import("../pages/Product");
const Payment = () => import("../pages/Payment");
const Address = () => import("../pages/Address");

Vue.use(Router)

const routes = [
  {
    path: '/', 
    name: 'app', 
    component: App,
    children: [{
      path: '',
      redirect: '/recommend'
    },{
      path: 'recommend',
      name: 'recommend',
      component: Recommend
    },{
      path: 'clothing',
      name: 'clothing',
      component: Clothing
    },{
      path: 'furniture',
      name: 'furniture',
      component: Furniture
    },{
      path: 'food',
      name: 'food',
      component: Food
    },{
        path: 'product',
        name: 'product',
        component: Product
    }]
  },{
    path: '/payment',
    name: 'payment',
    component: Payment
  },{
    path: '/address',
    name: "address",
    component: Address
  }
]

export default new Router({
  routes,
  mode: "hash",
  base: __dirname
})
