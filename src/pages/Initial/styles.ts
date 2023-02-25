import styled from 'styled-components/native'

export const Container = styled.View`
  height: 100%;
  width: 100%;
`

export const Form = styled.View`
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  width: 100%;
  height: 100%;
  padding: 24px;
`

export const Logo = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const LogoTitle = styled.Text`
  font-family: 'Bold';
  font-size: 24px;
`

export const Subscribe = styled.Text`
  font-family: 'Regular';
  font-size: 14px;
  width: 100%;

  margin-top: 16px;
  margin-bottom: 16px;
`

export const Actions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const HaveAccountAction = styled.TouchableOpacity`
  height: 48px;
  width: 50%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const HaveAccountActionTitle = styled.Text`
  font-family: 'Bold';
  font-size: 16px;
  color: black;
`

export const LoginAction = styled.TouchableOpacity`
  height: 48px;
  width: 50%;
  border-radius: 8px;
  background-color: orange;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const LoginActionTitle = styled.Text`
  font-family: 'Bold';
  font-size: 16px;
  color: white;
`