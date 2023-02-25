import { FlatList, View } from 'react-native'
import Header from '../../components/Header'

import images from '../../assets/assets'
import { Container, Book } from './styles'

const Home = () => {
  return (
    <Container>
      <Header
        leftIcon='menu'
        title='Todos os livros'
      />
      <FlatList
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        data={images}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Book source={item.image} />
        )}
      />
    </Container>
  )
}

export default Home