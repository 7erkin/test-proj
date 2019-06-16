import { Component } from "react";

class CustomValidation extends Component{
    constructor(props){
        super(props);

        this._trySubmit = false;
    }

    validateAndUpdate = async validationData => {
        let valid = true;

        const promises = validationData.map(async ({
            value,
            validationOkCb,
            validationErrCb,
            validator
        }) => {
            let res = await validator(value);

            if(!res.length)
                validationOkCb() 
            else{
                valid = false
                validationErrCb(res)
            } 
        })

        await Promise.all(promises)

        return valid;
    }

    trySubmit = () => {
        this._trySubmit = true;
    }

    hasAlreadyTrySubmit = () => this._trySubmit;
}

export default CustomValidation;