import * as React from 'react';
import { View, Text } from 'react-native';
import { AppHeader } from '../../components/app-header';

export interface FavoriteScreenProps {
}

export function FavoriteScreen (props: FavoriteScreenProps) {
    return (
      <View>
         <AppHeader title="Favoritos" />
      </View>
    );
}
