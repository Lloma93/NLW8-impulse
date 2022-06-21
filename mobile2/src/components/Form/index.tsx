import React , { useState } from 'react';
import { 
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity
 } from 'react-native';
import { theme } from '../../theme';
import { FeedbackType } from '../../components/Widget';
import { ScreenshotButton } from '../../components/ScreenshotButton';
import { Button } from '../../components/Button';
import { styles } from './styles';
import { feedbackTypes } from '../../utils/feedbackTypes'
import { captureScreen } from 'react-native-view-shot'
import { api } from './../../libs/api';
import * as FileSystem from 'expo-file-system';

interface Props {
    feedbackType: FeedbackType,
    onFeedbackCanceled: () => void;
    onFeedbackSent: () => void;
}

export function Form({feedbackType, onFeedbackCanceled, onFeedbackSent} : Props) {
    const [isSendingFeedabck, setIsSendingFeedabck] = useState(false)
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')

    function handleScreenshot() {
        captureScreen({
            format: 'jpg',
            quality: 0.8
        })

        .then(uri => setScreenshot(uri))
        .catch(error => console.log(error));
    }

    function handleScreenshotRemove() {
        setScreenshot(null)
    }

    async function handleSendFeedback(){
        if(isSendingFeedabck){
            return;
        }
        setIsSendingFeedabck(true);

        const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {encoding: 'base64'})

        try{
            await api.post('/feedbacks', {
                type: feedbackType,
                screenshot: `data:image/png;base64,${screenshotBase64}`,
                comment
            });

        onFeedbackSent();

        }
        catch (error){
            console.log(error)
            setIsSendingFeedabck(false)
        }
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity 
            onPress={onFeedbackCanceled}
            >
                {/* <ArrowLeft 
                size={24}
                weight="bold"
                color={theme.colors.text_secondary}
                /> */}
                <Text style={{ color:'#FFF'  }}> voltar </Text>
            </TouchableOpacity>
            <View style={styles.titleContainer}>
                <Image 
                    source= {feedbackTypeInfo.image}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    {feedbackTypeInfo.title}
                </Text>
            </View>
        </View>
        <TextInput 
            multiline
            style={styles.input}
            placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
            placeholderTextColor={theme.colors.text_secondary}
            // autoCorrect={false}
            onChangeText={setComment}
        />
        <View style={styles.footer}>
            <ScreenshotButton 
                onTakeShot={handleScreenshot}
                onRemoveShot={handleScreenshotRemove}
                screenshot={screenshot}
            />
            <Button 
            onPress={handleSendFeedback}
            isLoading={isSendingFeedabck}
            />
        </View>
    </View>
  );
}