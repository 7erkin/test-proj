import { Component } from "react";

class CustomValidation extends Component{
    constructor(props){
        super(props);

        this._trySubmit = false;
    }

    trySubmit = () => {
        this._trySubmit = true;
    }

    hasAlreadyTrySubmit = () => this._trySubmit;
}

export default CustomValidation;