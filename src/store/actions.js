/*
包含n个用于间接更新状态数据方法的对象
 */
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUsers,
  reqCaptcha
} from '../api'

import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER_INFO,
  RECEIVE_CAPTCHA
} from './mutation-types'

export default {

  // 异步获取address
  async getAddress({commit, state}) {
    const {latitude, longitude} = state;
    const result = await reqAddress(latitude + ',' + longitude);
    if (result.code === 0) {
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  // 异步获取categorys
  async getCategorys({commit}) {
    const result = await reqFoodCategorys();
    if (result.code === 0) {
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },


  // 异步获取shops
  async getShops({commit, state}) {
    // 发送ajax请求
    const {latitude, longitude} = state;
    const result = await reqShops(longitude, latitude);
    if (result.code === 0) {
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops})
    }
  },

  // 异步获取captcha
  async getCaptcha({commit}) {
    // 发送ajax请求
    const result = await reqCaptcha();
    if (result.code === 0) {
      const captcha = result.data;
      commit(RECEIVE_CAPTCHA, {captcha})
    }
  },

  // 异步获取userInfo
  async getUserInfo({commit}) {
    // 发送ajax请求
    const result = await reqUsers();
    if (result.code === 0) {
      const users = result.data;
      commit(RECEIVE_USER_INFO, {users})
    }
  },
}
