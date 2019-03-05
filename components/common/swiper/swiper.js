// components/common/swiper/swiper.js

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
    swiperData:[],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 500,
    indicatorDots:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  
  pageLifetimes:{
    show(){
      getData.pageData.swiper((state,res)=>{
        if(state == 'success'){
          this.setData({
            swiperData: res.data.data.chajian.datas
          })
        }
      })
    }
  }
  
})
