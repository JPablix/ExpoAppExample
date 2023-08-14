import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView, Text, View } from 'react-native';
import ReviewCard from './components/ReviewCard';
import DayCard from './components/DayCard';

export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Bienvenido al MenuTec</Text>
      <Text style={styles.headerSubtitle}>Semana 00</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Semana</Text>
        <Text style={styles.sectionDesc}>Menú de la semana actual</Text>
        <ScrollView horizontal style={styles.dayScrollContainer}>
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
          <DayCard />
        </ScrollView>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Reseñas</Text>
        <Text style={styles.sectionDesc}>Opiniones de la semana actual</Text>
        <ScrollView style={styles.reviewScrollContainer}>
          



          <ReviewCard /> 
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 5,
    backgroundColor: '#F4F3F3', 
  },
  section: {
    padding: 10,
  }, 
  headerTitle: {
    weihgt: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 60,
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 40,
    color: '#F5450E',
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  sectionDesc: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#7B7B7B',
  },
  dayScrollContainer: {
    flexGrow: 1,
  },
  reviewScrollContainer: {
    flexGrow: 1,
  },
});
