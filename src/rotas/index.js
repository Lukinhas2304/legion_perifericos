import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../paginas/home";
import CardFones from "../componentes/cardsFones/index";
import CardMonitores from "../componentes/cardsMonitores/index";
import CardMousePads from "../componentes/cardsMousePads/index";
import CardMouses from "../componentes/cardsMouses/index";
import CardTeclados from "../componentes/cardsTeclados/index";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Stack para telas que não devem aparecer no Drawer
function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Teclados" component={CardTeclados} options={{ headerShown: true }} />
      <Stack.Screen name="Mouses" component={CardMouses} options={{ headerShown: true }} />
      <Stack.Screen name="MousePads" component={CardMousePads} options={{ headerShown: true }} />
      <Stack.Screen name="Monitores" component={CardMonitores} options={{ headerShown: true }} />
      <Stack.Screen name="Fones" component={CardFones} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

export default function Rotas() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={StackRoutes} options={{ title: "Início" }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}