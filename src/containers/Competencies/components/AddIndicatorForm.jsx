import React from 'react'

const isFormFilledCorrectly = (state) => {
    return state.indicatorName != '';
}

class AddIndicatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indicatorName: ''
        };
    }

    onSubmit = (event) => {
        event.preventDefault();

        const indicatorName = this.state.indicatorName;
        
        if(!isFormFilledCorrectly(this.state))
           return;

        this.props.onIndicatorAdd(indicatorName);
    }

    onIndicatorNameChange = (event) => {
        this.setState({
            indicatorName: event.target.value
        });
    };

    render () { 
        return( 
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Введите имя нового индикатора" onChange={this.onIndicatorNameChange} /> <br />
                <button type="button" onClick={this.props.onClose}>Отмена</button>
                <button type="submit">Сохранить</button>
            </form>
        );
    }
};

export default AddIndicatorForm;