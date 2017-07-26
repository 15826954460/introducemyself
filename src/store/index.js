/**
 * Created by lele on 2017/7/24.
 */
import * as getters from './getters'
import * as mutations from './mutations'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
  loadingImg: false,  // 加载图片的
  loadingAuthor: false,  // 加载名字
  loadingApperception: false, // 寄语
  baseCommon: false, // 加载基本信息
  loadingItem: false, // 加载about me
  loadingAbout: false, // 加载icon
  Loading: false, // 加载text
  loadingText: false,
  bounced: false,
  loadingBtn: false
}
export default new Vuex.Store({
  state,
  getters,
  mutations
})
