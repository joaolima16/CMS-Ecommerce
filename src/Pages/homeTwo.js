import { KeyboardAvoidingView, ScrollView, View} from "react-native";

import HomeApp from '../pagetwo/HomeApp/HomeApp'
import NavbarTwo from "../pagetwo/Navbar/navbarTwo";

export default function HomeTwo() {
  return (
    <View style={{ paddingVertical: 25 }}>
      <KeyboardAvoidingView>
        <ScrollView>
          <NavbarTwo />          
        </ScrollView>
          <HomeApp />
      </KeyboardAvoidingView>
    </View>
  );
}
