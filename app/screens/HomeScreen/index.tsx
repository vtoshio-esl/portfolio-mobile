import React from 'react';
import { View, Text, Image, Linking, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTheme } from 'react-native-paper';
import type { AppTheme } from '../../themes/PaperTheme';
import { styles } from './styles';
import { ExternalLink } from '../../components/ExternalLink';
import { AppStackScreenProps } from '../../navigators/AppNavigator';


type Props = AppStackScreenProps<'home'>;

export function HomeScreen({ navigation }: Props) {
  const theme = useTheme<AppTheme>();
  
  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
          <View style={[
            styles.userContainer, 
            { backgroundColor: theme.colors.secondary200 } 
          ]}>
            <View style={{ margin: 20 }}>
              <Image
                source={require('../../assets/user_profile.png')}
                style={styles.userPfp}
              />
              <Text
                style={[
                  styles.nameTitle, 
                  { color: theme.colors.primary100 }
                ]}
              >
                Vinícius Toshio
              </Text>
              <Text
                style={[
                  styles.jobTitle, 
                  { color: theme.colors.primary300 }
                ]}
              >
                DESENVOLVEDOR FULL-STACK
              </Text>
            </View>
            <Text
              style={[
                styles.catchPhrash,
                { color: theme.colors.primary200 }
              ]}
            >
              "Apaixonado por soluções eficientes que mudam o mundo"
            </Text>
          </View>

          <View
            style={[
              styles.linksContainer
            ]}
          >
            <ExternalLink 
              name='Github'
              externalLinkHandler={ () => Linking.openURL('https://www.github.com/vToshio')}
            />
            <ExternalLink 
              name='LinkedIn' 
              externalLinkHandler={ () => Linking.openURL('https://www.linkedin.com/in/vtoshio') }
            />
            <ExternalLink 
              name='Habilidades' 
              externalLinkHandler={ () => navigation.navigate('skills') } 
            />
          </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
