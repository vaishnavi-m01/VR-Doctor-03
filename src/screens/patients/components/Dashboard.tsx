import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../Navigation/types';
import AssessItem from '../../../components/AssessItem';

interface DashboardProps {
  patientId: number;
}

export default function Dashboard({ patientId }: DashboardProps) {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ScrollView className="flex-1 p-4">
      <AssessItem
        icon="👨‍⚕️"
        title="Physician Dashboard"
        subtitle="Access physician tools and Particpant management"
        onPress={() => navigation.navigate("DoctorDashboard")}
      />
      
      <AssessItem
        icon="👤"
        title="Particpant Dashboard"
        subtitle="View Particpant information and session details"
        onPress={() => navigation.navigate('PatientDashboard', { patientId })}
      />
    </ScrollView>
  );
}
