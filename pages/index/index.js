Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndexNav:0,
    navList: [],
    swiperList:[],
    videosList:[],
    

  },
  activeNav(e){
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  getNavList() {
    let that = this;
    //利用小程序内置发送请求方法
    wx.request({
      // url: 'https://www.easy-mock.com/mock/5d6e4ffa3d4f554e5fdf9008/bilibili/nav',
      url:'https://www.easy-mock.com/mock/5d8208007dc7ee4666638a8f/bili/navList',//接口1
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        console.log(res);
        if(res.statusCode === 200){
          that.setData({
            navList: res.data.data.navList
          })
        } //https://www.easy-mock.com/mock/5d6e4ffa3d4f554e5fdf9008/bilibili/nav'接口2
        // if (res.data.code === 0) {
        //   console.log("ok");
        //   that.setData({
        //     navList: res.data.data.navList
        //   })
        // }

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
   getSwiperList(){
    let that = this;
    wx.request({
      url:'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList',
      data:{},
      method:'GET',
      success: function(res){
        if(res.statusCode === 200){
          that.setData({
            swiperList : res.data.data.swiperList
          })
          
        }
      }
    })
   },
  getVideosList() {
    let that = this;
    wx.request({
      url: 'https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        // console.log(res);
        if (res.data.code === 0) {
          that.setData({
            videosList: res.data.data.videosList
          })
        }

      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
   
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getNavList();
    this.getSwiperList();
    this.getVideosList();
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