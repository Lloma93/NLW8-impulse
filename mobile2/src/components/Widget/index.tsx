import React, { useRef, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Heart } from 'phosphor-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
// import { FaBeer } from 'react-icons/fa';
// import { FaBeer } from "@react-icons/lib/fa/beer";
import BottomSheet from '@gorhom/bottom-sheet';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { styles } from './styles';
import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes ;

export function Widget() {

  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)
  const bottomSheetRef = useRef<BottomSheet>(null);


 const handleOpen = () => {
    bottomSheetRef.current?.expand();
  } 

  function handleReestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  function handleFeedbackSent() {
    setFeedbackSent(true)
  }
  
  return(
    <>
    <TouchableOpacity 
      style={styles.button}
      onPress={handleOpen}
      >
     {/* <ChatTeardropDots 
        // size={24}
        // color={theme.colors.text_on_brand_color}
       // weight="bold"
      />  */}
      {/* <MaterialCommunityIcons name="comment-bookmark-outline" size={24} color="black" ></MaterialCommunityIcons> */}
      <Text style={{ color:'#FFF'  }}> Feed</Text>
      <Text> Back</Text>
    </TouchableOpacity> 

    <BottomSheet 
      ref={bottomSheetRef}
      snapPoints={[1, 280]}
      backgroundStyle={styles.modal}
      handleIndicatorStyle={styles.indicator}
      >
        {
          feedbackSent? 
          <Success onSendAnotherFeedback={handleReestartFeedback}/> 
          :
          <> 
          {
            feedbackType ? 
            <Form 
            feedbackType={feedbackType}
            onFeedbackCanceled={handleReestartFeedback}
            onFeedbackSent={handleFeedbackSent}
            />
            :
            <Options onFeedbackTypeChanged={setFeedbackType}/>
          }
          </>
        }
        {/* <Form 
          feedbackType='BUG'
        /> */}
        {/* <Success /> */}
      </BottomSheet> 
    </>
  );
 
} 