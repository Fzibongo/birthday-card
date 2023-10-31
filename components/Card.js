import { Text, View, StyleSheet, Image ,ImageBackground,  } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.Text}>
        <Text style={styles.BirthdayText}>
          <Text style={styles.HappyText}>Today We Welcome You </Text> <br />
         To Celebrate This Auspicious Celebration, happy birthday FIFI
        </Text>
        <View>
        <ImageBackground  source={require('../assets/images (15).jpg')} resizeMode="center" style={styles.image}>
    </ImageBackground>
    <View>
    
    </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HappyText: {
    color: 'green',
    fontStyle: 'italic',
    fontWeight:'bold'
  },

  BirthdayText: {
    color: 'green',
    fontSize: 20,
  },
  Text: {
    marginLeft: 80,
    marginTop: 50
  },
  image:{
    marginTop: 50
  }
});
