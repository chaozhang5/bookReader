import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const List: Taro.FC = () => {
  const hotBookList = [
    {
      imgSrc: require('../../../../assets/images/book/1.jpg'),
      name: '第九关',
    },
    {
      imgSrc: require('../../../../assets/images/book/2.jpg'),
      name: '神话树',
    },
    {
      imgSrc: require('../../../../assets/images/book/3.jpg'),
      name: '星空彼岸',
    },
    {
      imgSrc: require('../../../../assets/images/book/4.jpg'),
      name: '从红月开始',
    },
    {
      imgSrc: require('../../../../assets/images/book/5.jpg'),
      name: '万族之劫',
    },
    {
      imgSrc: require('../../../../assets/images/book/6.jpg'),
      name: '不科学御兽',
    },
    {
      imgSrc: require('../../../../assets/images/book/7.jpg'),
      name: '打更人',
    },
    {
      imgSrc: require('../../../../assets/images/book/8.jpg'),
      name: '武林神话',
    }
  ]

  const didBookList = [{
    imgSrc: require('../../../../assets/images/book/9.jpg'),
    name: '庆余年',
  },
  {
    imgSrc: require('../../../../assets/images/book/10.jpg'),
    name: '将夜',
  },
  {
    imgSrc: require('../../../../assets/images/book/11.jpg'),
    name: '斗破苍穹',
  },
  {
    imgSrc: require('../../../../assets/images/book/12.jpg'),
    name: '斗罗大陆',
  },
  {
    imgSrc: require('../../../../assets/images/book/13.jpg'),
    name: '择天记',
  },
  {
    imgSrc: require('../../../../assets/images/book/14.jpg'),
    name: '回到明朝',
  },
  {
    imgSrc: require('../../../../assets/images/book/15.jpg'),
    name: '全职高手',
  },
  {
    imgSrc: require('../../../../assets/images/book/16.jpg'),
    name: '盗墓笔记',
  }]

  return (
    <View className="book-list">
      <View className="header">
        <Text className="title">热门推荐</Text>
        <Text className="refresh" />
      </View>
      <View className="content">
        {
          hotBookList.map((item: any) => {
            return (
              <View className="item">
                <Image className="img" mode="aspectFill" src={item.imgSrc} />
                <Text className="name">{item.name}</Text>
              </View>
            )
          })
        }
        <View className="item">
        </View>
      </View>
      <View className="header">
        <Text className="title">完本热推</Text>
        <Text className="refresh" />
      </View>
      <View className="content">
        {
          didBookList.map((item: any) => {
            return (
              <View className="item">
                <Image className="img" mode="aspectFill" src={item.imgSrc} />
                <Text className="name">{item.name}</Text>
              </View>
            )
          })
        }
        <View className="item">
        </View>
      </View>
    </View>
  )
}

export default List
