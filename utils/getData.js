// 封装数据请求

const pageData = {
  // 轮播图数据
  swiper(callback){
    wx.request({
      url: 'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22dao_liu_app%22,%22chajian%22]&version=&app_channel=wap&plat=wap&access_token=d78db9615eeae46a4a7358850c7a805f&device_id=aae45330-364e-11e9-8f19-2f5fc881d938',
      header:{
        'content-type':'application/json'
      },
      success(res) {// 数据获取成功
        callback('success',res);
      }
    })
  },
  // 获取首页四格导航入口数据
  threNav(callback){
    wx.request({
      url: 'https://h5.watsons.com.cn/aladdin/get_batch_data?codes=[%22new_header%22,%22sylunbo%22,%22new_Home_4navs_180105_1%22,%22%E4%B8%B4%E6%97%B6%22,%22pingou_B%22,%22Home_AboveTopic_activity_170505_7%22,%22Home_TopicCase_170505_7%22,%22Home_CategaryNavs_170505_7%22]&version=&app_channel=wap&plat=wap&access_token=d78db9615eeae46a4a7358850c7a805f&device_id=aae45330-364e-11e9-8f19-2f5fc881d938',
      header:{
        'content-type': 'application/json'
      },
      success(res){
        callback('success',res)
      }
    })
  },
  // 获取首页领卷中心数据
  coupon(callback,url){
    wx.request({
      url: url,
      header:{
        'content-type':'application/json'
      },
      success(res){
        callback('success',res);
      }
    })
  },
  // 获取首页新人领红包模块图片数据
  newbieRedPacket(callback, url){
    wx.request({
      url: url,
      header:{
        'content-type':'allication/json'
      },
      success(res){
        callback('success',res);
      }
    })
  },
  // 获取倒计时数据
  countDown(callback,url){
    wx.request({
      url: url,
      header:{
        'content-type':'allication/json'
      },
      success(res){
        callback('success',res);
      }
    })
  },
  //首页商品列表数据
  commodity(callback,url){
    wx.request({
      url: url,
      header:{
        'content-type':'allication/json'
      },
      success(res){
        callback('success',res);
      }
    })
  },
  // 会员中心商品列表数据
  membersCenterList(callback,url){
    wx.request({
      url: url,
      header:{
        'content-type':'allication/json'
      },
      success(res){
        callback('success',res);
      }
    })
  },
  // 首页商品单图大图数据
  ShopingImg(callback,url){
    wx.request({
      url: url,
      header:{
        'content-type':'allication/json'
      },
      success(res){
        callback('success',res)
      }
    })
  },
  // 获取商品详情数据
  commodityDetails(callback,url){
    wx.request({
      url: url,
      header:{
        'content-type':'allication/json'
      },
      success(res){
        callback('success',res)
      }
    })
  }
}
// 导出
module.exports={
  pageData
}