// components/common/countDown/countDown.js

// 引入封装数据请求的文件
const getData = require('../../../utils/getData.js');

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
      h:0,
      m:0,
      s:0,
    curremTime:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dispose(page){
      var cha = (page.data.curremTime) -= 1;
      page.setData({
        s: Math.floor(cha % 60),
        h:Math.floor(cha/60%60),
        m:Math.floor(cha/60/60%24)
      })
      if(page.data.s<10){
        page.setData({
          s:'0'+page.data.s
        })
      }
      if (page.data.h < 10) {
        page.setData({
          h: '0' + page.data.h
        })
      }
      if (page.data.m < 10) {
        page.setData({
          m: '0' + page.data.m
        })
      }
    },
  },
  
  // 组件生命周期列表
  pageLifetimes:{
    show(){
      getData.pageData.countDown((state,res)=>{
        this.setData({
          now:res.data.data.now,
          endTime: res.data.data.specials_info_d_t_o.end_time,
          curremTime: Math.floor((res.data.data.specials_info_d_t_o.end_time - res.data.data.now) / 1000)
        })
       
      },'https://h5.watsons.com.cn/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=aae45330-364e-11e9-8f19-2f5fc881d938')
      setInterval(()=>this.dispose(this),1000);
    }
  }
})
