import { View } from '@tarojs/components'
import { Component } from 'react'
import Banner from './components/banner'
import List from './components/list'
import './index.scss'

export default class Index extends Component {

  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='book-index'>
        <Banner />
        <List />
      </View>
    )
  }
}
