import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from 'react-native-paper';
import { AppTheme } from '../../themes/PaperTheme';

import { styles } from './styles';

export interface SkillCardProps {
  name: string,
  tag: string,
  rate: number
}

export function SkillCard(props: SkillCardProps) {
  const theme = useTheme<AppTheme>()
  const rate = formatRate(props.rate) 

  function formatRate(value: number): number {
    return Math.min(Math.max(value, 0), 5)
  }

  return (
    <View style={[
      styles.container, 
      { 'backgroundColor': theme.colors.secondary300}
    ]}>
      <View style={styles.techGroup}>  
        <Text style={{
          color: theme.colors.primary100,
          fontWeight: 'bold',
          fontSize: 16
        }}>
          { props.name }
        </Text>
        <Text style={{
          color: theme.colors.primary300,
          fontWeight: '700',
          fontSize: 12,
          letterSpacing: 1.5
        }}>
          { props.tag.toUpperCase() }
        </Text>
      </View>

      <View style={styles.rating}>
        { Array.from({ length: 5 }).map((_, index) => (
          <Text 
            key={index} 
            style={{
              'fontSize': 25,
              'color': theme.colors.yellow
            }}
          >
            { index < rate ? '★' : '☆'}
          </Text>
        ))}
      </View>
    </View>
  );
}