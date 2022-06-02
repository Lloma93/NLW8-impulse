import React from 'react';
import { View,
    TouchableOpacity,
    Image,
    Text
} from 'react-native';

interface Props{
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

import { styles } from './styles';

export function ScreenshotButton({ screenshot, onTakeShot,  onRemoveShot} : Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    onPress={ screenshot? onRemoveShot : onTakeShot}
    >
        <>
        {
            screenshot ? 
            (
                <View>
                <Image style={styles.image} source={{uri: screenshot}} />
            <Text style={styles.removeIcon}> lixeira</Text>
                </View>
            ) 
            
            : (<Text style={styles.removeIcon}> printar </Text>)
        }
        </>
        {/* 
        ícone de lixeira ou máquina fotografica

        <Trash size={22} color=theme.colors.text_secondary weight="fill" style={styles.removeIcon}}
        */}

    </TouchableOpacity>
  );
}