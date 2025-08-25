import React from 'react';
import { ScrollView, View } from 'react-native';
import AssessItem from '../../../components/AssessItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigation/types';

type OrientationTabNavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface OrientationTabProps {
  patientId: number;
}

export default function OrientationTab({ patientId }: OrientationTabProps){
  const navigation = useNavigation<OrientationTabNavigationProp>();

  return ( 
    <ScrollView className="flex-1 p-4 bg-bg">
      <AssessItem
        icon="📊"
        title="Pre VR Assessment"
        subtitle="Evaluate participant readiness and comfort before VR session"
        onPress={() => 
          navigation.navigate('PreVR', { patientId })
        }
      />
      <AssessItem
        icon="📊"
        title="Post VR Assessment"
        subtitle="Collect feedback and evaluate VR session experience"
        onPress={() => 
          navigation.navigate('PostVRAssessment', { patientId })
        }
      />
      <AssessItem
        icon="✅"
        title="Orientation completed(Yes/No)"
        subtitle="Track orientation completion status for participant"
        
        
      />
    </ScrollView>
  );
}
