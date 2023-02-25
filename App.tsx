import { Text, View } from 'react-native'
import Home from './src/pages/Home'
import {
  useFonts,
  Nunito_400Regular as Regular,
  Nunito_500Medium as Medium,
  Nunito_700Bold as Bold
} from '@expo-google-fonts/nunito'
import Initial from './src/pages/Initial'

export default function App() {
  let [fontsLoaded] = useFonts({
    Regular,
    Medium,
    Bold
  })

  if (!fontsLoaded) return <Text>Carregando...</Text>

  return (
    <View>
      <Initial />
    </View>
  )
}