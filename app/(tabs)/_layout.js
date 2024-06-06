import { Tabs } from "expo-router";

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{title: "Acceuil"}}/>
            <Tabs.Screen name="legalMention" options={{title: "Mention légales"}}/>
            <Tabs.Screen name="donate" options={{title: "Dons"}}/>
        </Tabs>
    )
}