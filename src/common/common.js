import Navigator from './navigator'
import Http from './http'

export default (Vue) => {
    Vue.prototype.$http = Http;
    Vue.$openRouter = Vue.prototype.$openRouter = Navigator.openRouter;
}