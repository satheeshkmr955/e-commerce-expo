import { View } from "react-native";
import Head from "expo-router/head";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

export default function Screen() {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Admin Dashboard" />
      </Head>
      <View className="p-4">
        <Button size="default" variant="default">
          <Text>Click Me</Text>
        </Button>
      </View>
    </>
  );
}
