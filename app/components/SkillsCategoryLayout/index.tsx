import type { ReactNode } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from 'react-native-paper';

import type { AppTheme } from '../../themes/PaperTheme';
import { SkillCard, SkillCardProps } from '../SkillCard';
import { styles } from './styles';

interface SkillsCategoryLayoutProps {
  title: string;
  description: string;
  children?: Array<SkillCardProps>;
}

export function SkillsCategoryLayout({
  title,
  description,
  children,
}: SkillsCategoryLayoutProps) {
  const theme = useTheme<AppTheme>();

  return (
    <ImageBackground
      source={require('../../assets/background.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView
        edges={['right', 'bottom', 'left']}
        style={styles.container}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View
            style={[
              styles.headerCard,
              {
                backgroundColor: theme.colors.secondary200,
                shadowColor: theme.colors.secondary400,
              },
            ]}
          >
            <Text
              style={[
                styles.eyebrow,
                { color: theme.colors.primary300 },
              ]}
            >
              HABILIDADES
            </Text>
            <Text
              style={[
                styles.title,
                { color: theme.colors.primary100 },
              ]}
            >
              {title}
            </Text>
            <Text
              style={[
                styles.description,
                { color: theme.colors.primary200 },
              ]}
            >
              {description}
            </Text>
          </View>

          {children && (
            <View style={styles.content}>
              {children.map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  tag={skill.tag} 
                  rate={skill.rate}
                />
              ))}
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}
