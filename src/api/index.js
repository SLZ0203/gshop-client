/*
包含n个接口请求函数的模块
 */
import ajax from './ajax'

//1、根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/api/position/' + geohash);

//2、获取食品分类列表
export const reqFoodCategorys = () => ajax('/api/index_category');

//3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/api/shops', {latitude, longitude});

//5、获取一次性验证码
export const reqCaptcha = () => ajax('/api/captcha');

//4. 根据会话获取用户信息
export const reqUsers = () => ajax('/api/userinfo');
