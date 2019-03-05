// pages/members/members.js

// 引入外部数据封装
const getData = require('../../utils/getData.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ListNav:['会员爆款','会员三折起','更多会员价'],
    activeNum:0,
    ListData:[],
    groupId:9966,
  },

  // ListNav导航点击
  ListNavBind:function(event){
    let index = event.currentTarget.dataset.index;
    this.setData({
      activeNum:index
    })
    if (this.data.activeNum == 0){
      this.setData({
        groupId:9966
      });
      this.onLoad();
    } else if (this.data.activeNum == 1){
      this.setData({
        groupId: 9967
      });
      this.onLoad();
    } else if (this.data.activeNum == 2){
      this.setData({
        groupId: 9968
      });
      this.onLoad();
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getData.pageData.membersCenterList((state,res)=>{
      if(state == 'success'){
        this.setData({
          ListData:res.data.data.item_list
        })
      }
    },'https://h5.watsons.com.cn/item/ws/group_list?current_page=1&page_size=24&group_id='+this.data.groupId+'&device_id=af342fb0-389b-11e9-ac55-85f3831e2839')
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