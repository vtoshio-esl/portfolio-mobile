import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { useTheme } from 'react-native-paper';
import { AppTheme } from '../../themes/PaperTheme';
import { styles } from './styles';

export interface ExternalLinkProps {
  name: string;
  externalLinkHandler?: () => void | Promise<void>;
}

export function ExternalLink(props: ExternalLinkProps) {
  const theme = useTheme<AppTheme>();
  
  return (
    <Pressable onPress={props.externalLinkHandler}>
      <View style={[
        styles.container,
        { 
          backgroundColor: theme.colors.secondary100,
          shadowColor: theme.colors.primary200 
        }
      ]}>
          <Text style={[
            styles.linkTitle,
            { color: theme.colors.primary100 }
          ]}>
              { props.name }
          </Text>
      </View>
    </Pressable>
  );
}