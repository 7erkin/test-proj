import React from 'react'
import CustomInputView from '../custom-input-view';

// TODO: bad desicision
const CustomTextAreaView = (props) => {
    return <CustomInputView multiline={true} rows={10} {...props}/>
}

export default CustomTextAreaView;