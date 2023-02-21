import { View, Text } from 'react-native'
import React from 'react'
import * as Yup from 'yup' 
import {formik} from 'formik'

const PLACEHOLDER_IMG= ''

const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption:Yup.string().max(2200,'Caption has reached the character')
})

const FormikPostUploader = () => {
    const [thumbnail,setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <View>
      <Text style={{color:'white'}}>FormikPostUploader</Text>
    </View>
  )
}

export default FormikPostUploader