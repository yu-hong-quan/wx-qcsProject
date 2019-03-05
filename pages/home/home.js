// pages/home/home.js

// 引入封装数据请求的文件
const getData = require('../../utils/getData.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    floorstatus: false,
    threData:[],
    couponData:[],
    newbieRedPacketData:[],
    countListData:[],
    commodity:[],
    shopingImg:[]
  },

  // 回到顶部
  goTop:function(e){
    if (wx.pageScrollTo) {
      wx.pageScrollTo({
        scrollTop: 0,
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  // 实时获取页面滚动高地
  onPageScroll: function (e) {
    if (e.scrollTop > 100) {//页面距离大于100px,则显示回到顶部控件
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      })
    }
  },

  // 点击去到活动商品列表
  ActiveDroductList:function(ev){
    wx.navigateTo({
      url: 'ActiveDroductList/ActiveDroductList?topTitle='+ev.currentTarget.dataset.title+'',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getData.pageData.threNav((state, res)=>{
      if(state == 'success'){
        this.setData({
          threData: res.data.data.new_Home_4navs_180105_1.datas
        })
      }
    })
    getData.pageData.coupon((state,res)=>{
      if(state == 'success'){
        this.setData({
          couponData:res.data.data.layout[0].content.bg
        })
      }
    },'https://h5.watsons.com.cn/topic/data/T20190129165548930?device_id=aae45330-364e-11e9-8f19-2f5fc881d938')
    getData.pageData.newbieRedPacket((state,res)=>{
      if(state == 'success'){
        this.setData({
          newbieRedPacketData:res.data.data.layout[0].content.image
        })
      }
    },'https://h5.watsons.com.cn/topic/data/T20190211183319798?device_id=aae45330-364e-11e9-8f19-2f5fc881d938')
    getData.pageData.countDown((state, res) => {
      this.setData({
        countListData: res.data.data.specials_item_v_o_s,
      })
    }, 'https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=aae45330-364e-11e9-8f19-2f5fc881d938')
    getData.pageData.commodity((state, res)=>{
      this.setData({
        commodity: res.data.data.layout
      })
    },'https://h5.watsons.com.cn/topic/data/T20190220103914589?device_id=d2513d30-3733-11e9-beb6-f72007d1c43c')
    getData.pageData.ShopingImg((state,res)=>{
      this.setData({
        shopingImg:res.data.data.layout[10].content
      })
    },'https://h5.watsons.com.cn/topic/data/T20190222165309121?device_id=af342fb0-389b-11e9-ac55-85f3831e2839')
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