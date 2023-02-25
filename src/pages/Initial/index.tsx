import { Actions, Container, Form, Logo, LogoTitle, Subscribe, HaveAccountAction, LoginAction, HaveAccountActionTitle, LoginActionTitle } from './styles'
import Feather from 'react-native-vector-icons/Feather'

const Initial = () => {
  return (
    <Container>
      <Form>
        <Logo>
          <Feather name='book-open' size={36} />
          <LogoTitle>
            MyBooks
          </LogoTitle>
        </Logo>
        <Subscribe>
          Entre agora e tenha acesso a milhares de livros. Basta alugar e você pode ler de onde estiver, do seu jeito.
        </Subscribe>
        <Actions>
          <HaveAccountAction activeOpacity={0.8}>
            <HaveAccountActionTitle>
              Já tenho conta
            </HaveAccountActionTitle>
          </HaveAccountAction>
          <LoginAction activeOpacity={0.8}>
            <LoginActionTitle>
              Entrar
            </LoginActionTitle>
          </LoginAction>
        </Actions>
      </Form>
    </Container>
  )
}

export default Initial