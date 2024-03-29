import Vue from "vue";
import Vuex from "vuex"
Vue.use(Vuex);

import home from "./home/index";
import search from "./search/search";
import detail from "./detail/detail";
import shopcart from "./shopcart/shopcart";
import user from "./user/user";
import trade from "./trade/trade"

export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcart,
        user,
        trade
    }
})