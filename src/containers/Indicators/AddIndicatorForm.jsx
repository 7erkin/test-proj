import React from 'react'

const NO_SELECTED = -1;

class AddIndicatorForm extends React.Component{
    constructor(props){
        super(props);

        this.groupId = NO_SELECTED;
        this.indicatorName = '';
    }

    isValid = () => this.groupId !== NO_SELECTED && this.indicatorName !== '';

    onGroupSelected = groupId => this.groupId = groupId;

    onIndicatorNameInput = name => this.indicatorName = name;

    render() {
        return (
            <form method="POST" action="#" onSubmit={event => {
                event.preventDefault();
                if(!this.isValid()) return;
                this.props.onSubmit(this.indicatorName, this.groupId);
                this.props.history.push(`/indicators/indicator-editor/${this.groupId}`)
            }}>
                <input className="form-control" onChange={event => this.onIndicatorNameInput(event.target.value)} type="text" placeholder="Input indicator name"></input>
                <br />
                <select className="form-control" onChange={event => this.onGroupSelected(event.target.value)}>
                    <option value={NO_SELECTED}>Change indicator group</option>
                    {this.props.indicatorGroups.map(group => {
                        return (
                            <option value={group.id}>{group.name}</option>
                        );
                    })}
                </select>
                <br />
                <button type="button" onClick={() => this.props.history.goBack()}>Cancel</button>
                <button type="submit">Save</button>
            </form>
        );
    }
};

export default AddIndicatorForm;