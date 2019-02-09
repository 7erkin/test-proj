import React from 'react'

const isFormFilledCorrectly = (state) => {
    return state.grouId != -1 && state.indicatorName != '';
}

class AddIndicatorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupId: -1,
            indicatorName: ''
        };
    }

    onSubmit = (event) => {
        event.preventDefault();
        const groupId = this.state.groupId;
        const indicatorName = this.state.indicatorName;
        
        if(!isFormFilledCorrectly(this.state))
           return;

        this.props.onIndicatorAdd(indicatorName, groupId);
    }
    onSelectGroup = (event) => {
        this.setState({
            ...this.state,
            groupId: Number(event.target.value)
        });
    }
    onIndicatorNameChange = (event) => {
        this.setState({
            ...this.state,
            indicatorName: event.target.value
        });
    };

    render () { 
        return( 
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Введите имя нового индикатора" onChange={this.onIndicatorNameChange} /> <br />
                <select value={this.state.grouId} onChange={this.onSelectGroup}>
                    <option value={-1}>Выберите группу</option>
                    {this.props.groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
                </select> <br />
                <button type="button" onClick={this.props.onClose}>Отмена</button>
                <button type="submit">Сохранить</button>
            </form>
        );
    }
};

export default AddIndicatorForm;