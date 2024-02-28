import {Box, Heading, Text} from '@gluestack-ui/themed';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, TextInput} from 'react-native';
export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const [username, setUsername] = useState('');
  const [warning, setWarning] = useState(false);

  const handleLogin = () => {
    if (username.length < 6) {
      setWarning(true);
    } else {
      navigation.navigate('bottomTabs', {screen: 'profileScreen', params: {username: username}});
    }
  };

  return (
    <SafeAreaView>
      <Box top={100} padding={20}>
        <Box justifyContent="center">
          <Heading
            size="2xl"
            textAlign="center"
            mb={25}
            fontWeight="$bold"
            letterSpacing="$xl"
            style={{fontFamily: 'Lobster'}}
            >
            Instagram
          </Heading>

          <Box>
            <TextInput
              style={styles.input}
              value={username}
              placeholder="Phone number email or username"
              onChangeText={text => setUsername(text)}
            />
            {warning && (
              <Text style={{color: 'red', marginBottom: 15}}>
                Invalid username
              </Text>
            )}
            <Pressable
              onPress={handleLogin}
              style={{backgroundColor: '#316FF6', padding: 5}}>
              <Text
                textAlign="center"
                fontWeight="bold"
                color="white"
                fontSize={17}>
                Log in
              </Text>
            </Pressable>
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderBottomColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 5,
  },
});
