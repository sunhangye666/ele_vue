/**
 * Created by sunhangye on 17/7/17.
 */
import Mock from 'mockjs'
import data from './data.json'

// 注册接口
Mock.mock('./api2/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('./api2/ratings', {
  code: 0,
  data: data.ratings
})
Mock.mock('./api2/seller', {
  code: 0,
  data: data.seller
})
