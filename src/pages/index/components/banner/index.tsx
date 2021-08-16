import { Image, Swiper, SwiperItem, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'

const Banner: Taro.FC = () => {
  return (
    <Swiper
      className="book-banner"
      indicatorDots={false}
      circular
      autoplay>
      <SwiperItem>
        <Image mode="aspectFill" className="img" src={require('./images/banner1.jpg')} />
      </SwiperItem>
      <SwiperItem>
        <Image mode="aspectFill" className="img" src={require('./images/banner2.jpg')} />
      </SwiperItem>
      <SwiperItem>
        <Image mode="aspectFill" className="img" src={require('./images/banner3.jpg')} />
      </SwiperItem>
    </Swiper>
  )
}

export default Banner
