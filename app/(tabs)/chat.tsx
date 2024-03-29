import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import Message from '@/components/Message';
import { Stack } from 'expo-router';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>



      <Message message_type='incoming' message_text={"Hey, there"} />
      <Message message_type='outgoing' message_text={"hi, there"} />
      <Message message_type='incoming' message_text={"where have you been ?"} />
      <Message message_type='incoming' message_text={"I was at school, So can we meet tomorrow ?"} />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 25,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
