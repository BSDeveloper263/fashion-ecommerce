import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  return (
    <WebView
      source={{ uri: 'https://fashion-ecommerce-three-psi.vercel.app/' }}
      style={{ flex: 1 }}
    />
  );
}
