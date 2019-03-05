// pages/home/ActiveDroductList /ActiveDroductList.js

// 引入外部数据封装
const getData = require('../../../utils/getData.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topTitle:'',
    ListNav: ['乳液面霜', '眼霜精华', '洁面/爽肤水'],
    activeNum: 0,
    ListData: [],
    groupId:14147,
    currentPage:1,
    showBln:false
  },

  // 回到首页
  goHome(){
    wx.switchTab({
      url: '../home',
    })
  },
  // 回到购物车
  goShoping(){
    wx.switchTab({
      url: '/pages/shoppingCath/shoppingCath',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // options可以接收页面跳转带上的参数
    if (options){
     let titleName = options.topTitle;
     let title = titleName.split('-')[1].split('(');
     this.setData({
       topTitle: title[0]
     })
     wx.setNavigationBarTitle({
       title: this.data.topTitle
     })
   }
    getData.pageData.membersCenterList((state, res) => {
      if (state == 'success') {
        this.setData({
          ListData: res.data.data.item_list
        })
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id=' + this.data.groupId + '&device_id=af342fb0-389b-11e9-ac55-85f3831e2839')
  },

  ListNavBind: function (event) {
    let index = event.currentTarget.dataset.index;
    this.setData({
      activeNum: index
    })
    if (this.data.activeNum == 0) {
      this.setData({
        groupId: 14147,
        currentPage:1
      });
      this.onLoad();
    } else if (this.data.activeNum == 1) {
      this.setData({
        groupId: 14148,
        currentPage: 1
      });
      this.onLoad();
    } else if (this.data.activeNum == 2) {
      this.setData({
        groupId: 14149,
        currentPage: 1
      });
      this.onLoad();
    }
  },

  // 商品详情跳转
  brackCommodityDetails:function(ev){
    var cur = ev.currentTarget.dataset;
    wx.navigateTo({
      url: '../CommodityDetails/CommodityDetails?item_uid=' + cur.id + '&item_img=' + cur.img + '&item_salePoint=' + cur.salepoint + '&brannname=' + cur.brannname + '&item_shortName=' + cur.shortname + '&item_maxPrice=' + cur.maxprice + '&item_maxVipPrice=' + cur.maxvipprice
    })
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
    let i = setInterval(function(){
      wx.setNavigationBarTitle({
        title: '正在玩命加载中...',
      })
    },2000)
    //在当前页面显示导航条加载动画。
    wx.showNavigationBarLoading();
    //重新加载产品信息
    this.onLoad();
    //隐藏导航条加载动画。
    wx.hideNavigationBarLoading();
    //停止当前页面下拉刷新。
    wx.stopPullDownRefresh();
    clearInterval(i)
    //动态设置当前页面的标题。
    wx.setNavigationBarTitle({
      title: this.data.topTitle,
    })

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let currentPage = this.data.currentPage+1;
    this.setData({
      currentPage: currentPage
    })
        wx.showLoading({
          title: '正在玩命加载中....',
        })
    getData.pageData.membersCenterList((state, res) => {
      if (state == 'success') {
        if(res.data.data.item_list){
          let arr = this.data.ListData
          arr = arr.concat(res.data.data.item_list)
          this.setData({
            ListData: arr
          })
        }else{
          this.setData({
            showBln:true
          })
        }
        wx.hideLoading();
      }
    }, 'https://h5.watsons.com.cn/item/ws/group_list?current_page=' + this.data.currentPage +'&page_size=24&group_id=' + this.data.groupId + '&device_id=af342fb0-389b-11e9-ac55-85f3831e2839')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})