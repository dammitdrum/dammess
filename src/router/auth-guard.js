import {store} from '../store/index'

export default (to, from, next) => {
  if (to.path === '/login' || to.path === '/registration') {
    if (!store.getters.isAuth) {
      next()
    } else {
      next('/auth')
    }
    return
  }
  if (store.getters.isAuth) {
    next()
  } else {
    next('/auth')
  }
}
