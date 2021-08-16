export default {
  pages: [
    'pages/index/index',
    'pages/history/index',
    'pages/orderBy/index',
    'pages/user/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    color: '#3C3C5A',
    selectedColor: '#1890ff',
    backgroundColor: '#fff',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/history/index',
        iconPath: './assets/images/tabar/history.png',
        selectedIconPath: './assets/images/tabar/history-active.png',
        text: '书架',
      },
      {
        pagePath: 'pages/index/index',
        iconPath: './assets/images/tabar/home.png',
        selectedIconPath: './assets/images/tabar/home-active.png',
        text: '书城',
      },
      {
        pagePath: 'pages/orderBy/index',
        iconPath: './assets/images/tabar/order.png',
        selectedIconPath: './assets/images/tabar/order-active.png',
        text: '分类',
      },
      {
        pagePath: 'pages/user/index',
        iconPath: './assets/images/tabar/user.png',
        selectedIconPath: './assets/images/tabar/user-active.png',
        text: '我的',
      },
    ],
  },
}
