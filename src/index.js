const Home={
    template:`
        <div>
            <h1>Home</h1>
            <router-link to="/products">Products</router-link>
        </div>
    `
}
const Products={
    //组件内独享路由（Enter与Leave都是以Products为基点）
    beforeRouteEnter(to, from, next) {
        console.log('beforeRouteEnter',to,from)
        next()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeUpdate',to,from)
        next()
    },
    beforeRouteLeave(to, from, next) {
        console.log('beforeRouteLeave',to,from)
        next()
    },
    template:`
        <div>
            <h1>Products</h1>
        </div>
    `
}
const About={
    template:`
        <div>
            <h1>About</h1>
        </div>
    `
}
const Login={
    template:`
        <div>
            <h1>you need to login, if you want to enter</h1>
            <router-link to="/">Home</router-link>
        </div>
    `
}


const router = new VueRouter({
    routes:[
        {
            path:'/',
            component:Home,
        },
        {
            path:'/products',
            //beforeUpdate复用组件的时候才会使用
            // path:'/products/:id',
            component:Products,
            //路由的独享守卫
            //在组件内不再是beforeEnter而是beforeEach
            // beforeEnter:(to,from,next)=>{
            //     if (to.path === '/products'){
            //         next("/login")
            //     }else{
            //         next()
            //     }
            // }
        },
        {
            path:'/about',
            component:About
        },
        {
            path:'/login',
            component:Login
        },
    ]
});
//全局路由守卫
//每次跳转都会实现拦截所有时全局路由守卫
//to:即将要进入的目标 路由对象
//from：当前导航正要离开的路由
//next：必须调用钩子函数，跳入下一个页面
// router.beforeEach((to,from,next) => {
//     console.log('router.beforeEach->',to,from)
//     if(to.path === '/products'){
//         next({path:'/login'})
//     }else{
//         next()
//     }
// })
// router.afterEach((to,from) => {
//     console.log('router.afterEach->',to,from)
// })

new Vue({
    el:'#app',
    router,
})
