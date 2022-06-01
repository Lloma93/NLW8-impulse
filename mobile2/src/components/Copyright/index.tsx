import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
// rnbc

export function Copyright() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
        Feito com ♥♥♥ pela @lloma93
        {/* <a
          className="underline underline-offset-2"
          href="https://www.linkedin.com/in/palloma-thayna/"
        >
          {" "}
          @lloma93{" "}
        </a> */}
        </Text>
    </View>
  );
}