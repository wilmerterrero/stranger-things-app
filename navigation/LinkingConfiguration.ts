/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'one',
            },
          },
          Characters: {
            screens: {
              ChractersScreen: 'two',
            },
          },
          Moments: {
            screens: {
              MomentsScreen: 'three',
            },
          },
          About: {
            screens: {
              AboutScreen: 'fourth',
            },
          },
          Life: {
            screens: {
              LifeScreen: 'five',
            },
          },
        },
      },
    },
  },
};

export default linking;
