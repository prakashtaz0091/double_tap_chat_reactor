import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Feed",
          headerRight: () => {

            return (
              <FontAwesome5
                name="facebook-messenger"
                size={25}
                color="white"
                onPress={() => {
                  navigation.navigate('chat' as never);

                }}
              />
            )
          }
        }}
      />
      <Stack.Screen
        name='chat'
        options={{
          title: "Chat",

        }}
      />

    </Stack>
  );
}
