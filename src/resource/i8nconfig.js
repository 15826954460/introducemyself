/**
 * Created by lele on 2017/7/25.
 */
import Vue from 'vue'
Vue.use(VueI18n)
import VueI18n from 'vue-i18n'
import {messages} from './i8ndata'
const lan = 'CN' // 默认为中文
export const i18n = new VueI18n({
  locale: lan, // set locale
  messages // set locale messages
})
if (window.localStorage.getItem('lan') === null) {
  i18n.locale = lan
} else { // 根据用户上次的选择的语言来显示语言
  i18n.locale = window.localStorage.getItem('lan')
}
