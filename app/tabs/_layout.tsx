import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';
export default function AppLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#ffd33d",
                headerShown: true,
                headerStyle: {
                    backgroundColor: "#25292e",
                },
                headerShadowVisible: false,
                headerTintColor: "#fff",
                tabBarStyle: {
                    backgroundColor: "#25292e",
                }
            }}>
            <Tabs.Screen name="index" options={{
                title: "home",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                )
            }} />
            <Tabs.Screen name='about' options={{
                title: "about",
                tabBarIcon: ({ color, focused }) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
                )
            }} />
        </Tabs>
    )
}