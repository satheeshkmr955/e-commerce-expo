import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { Text } from "@/components/ui/text";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-xl font-bold">This screen doesn't exist.</Text>

        <Link href="/" className="mt-4 px-4">
          <Text className="text-sm text-[#2e78b7]">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
