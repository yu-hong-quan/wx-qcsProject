
// 引入外部数据封装
const getData = require('../../../utils/getData.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    commodityImg:'',
    commodityTitle:'',
    commodityPrice:0,
    commodityListDataImg:[],
    shopingCathStorng:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 设置页面头部title
    wx.setNavigationBarTitle({
      title: options.item_shortName,
    })

    // 商品数据详情获取
    commodityDetails(this,options);
    this.setData({
      commodityImg: options.item_img,
      commodityTitle: options.item_shortName,
      commodityPrice: options.item_maxPrice
    })
  },

  // 回到首页
  goHome(){
    wx.switchTab({
      url: '../home',
    })
  },
  // 回到购物车
  goShoping:function(){
    wx.switchTab({
      url: '/pages/shoppingCath/shoppingCath',
    })
  },
  // 购买
  jiaRuGoWuCath(ev){
    console.log(ev.currentTarget.dataset);
    var arr = [];
    // 判断缓存中是否有购物车对象
    var getStrong = wx.getStorageSync('CommodityCath');
    console.log(getStrong)
    if (getStrong.length){
      var serar = false;
      getStrong.forEach((item,index)=>{
        if (item.titlename == ev.currentTarget.dataset.titlename) {
          item.num++;
          wx.setStorageSync('CommodityCath', getStrong);
          console.log('一、该商品已存在')
          serar = false;
          return
        } else {
          serar = true;
        }
      })
      if (serar) {
        console.log('二、该商品不存在')
        let arrTwo = wx.getStorageSync('CommodityCath');
        arrTwo.push(ev.currentTarget.dataset)
        wx.setStorageSync('CommodityCath', arrTwo)
      }
    }else{
      console.log('2、缓存不存在')
      arr.push(ev.currentTarget.dataset)
      var setStrong = wx.setStorageSync('CommodityCath', arr);
      
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})

var commodityDetails = function (page, options){
  // 发起请求，获取商品大图详情数据
  getData.pageData.commodityDetails((state, res) => {
    if (state == 'success') {
      // console.log(res)
      page.setData({
        commodityListDataImg:res.data
      })
    }
  }, 'https://h5.watsons.com.cn/item/desc/data/get?item_uid=' + options.item_uid)
  // 发起请求，获取推荐商品列表数据
  getData.pageData.commodityDetails((state, res) => {
    if (state == 'success') {
      // console.log(res)
    }
  }, 'https://h5.watsons.com.cn/act/mop/aladdin/recommend?source=ITEM_DETAIL&count=30&offset=0&item_id=' + options.item_uid.split('_')[1])
}
