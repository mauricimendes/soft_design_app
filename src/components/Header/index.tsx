import { Container, Title } from './styles'
import Feather from 'react-native-vector-icons/Feather'

interface IHeader {
  leftIcon: 'menu' | 'chevron-left'
  title: string
}

const Header: React.FC<IHeader> = ({ leftIcon, title }) => {
  return (
    <Container>
      <Feather name={leftIcon} size={24} />
      <Title>
        {title}
      </Title>
      <Feather name='search' size={24} />
    </Container>
  )
}

export default Header