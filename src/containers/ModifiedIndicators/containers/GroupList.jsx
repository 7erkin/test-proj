import React from 'react'

import {Link} from 'react-router-dom'

const onValidClick = event => event.target.tag = 'button';

class GroupList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeGroupId: props.defaultGroupId
        };
    }
    isActive = groupId => {
        return groupId == this.state.activeGroupId ? 'active-group' : '';
    }
    
    onGroupSelect = (groupId) => {
        this.props.onSelectGroup(groupId);
    }

    // on Update props or setState. Return new state or null
    static getDerivedStateFromProps = (nextProps, prevState) => {
        return {
            activeGroupId: nextProps.activeGroupId
        };
    }

    render() {
        const {
            groups,
            onGroupDelete,
            onAddGroupFormOpen,
            isEditModeOn
         } = this.props;

        return (
            <section className="group">
                {isEditModeOn ? <button className="btn btn-success" onClick={onAddGroupFormOpen}>Добавить группу</button> : <div/>}
                <ul className="indicator-group-list">
                    {groups.map(group => {
                        return (
                            <li 
                                key={group.id}
                                className={`indicator-group-item ` + `${this.isActive(group.id)}`}>
                                    <Link to={`/indicators/${group.id}`} onClick={() => this.onGroupSelect(group.id)}>
                                        {group.name}
                                    </Link>
                                    {isEditModeOn ? <button 
                                                        className="btn btn-danger btn-sm" 
                                                        onClick={event => {
                                                            event.stopPropagation();
                                                            if(onValidClick(event))
                                                                onGroupDelete(group.id)
                                                        }} >Удалить</button> : <div />}
                            </li>
                        );
                    })}
                </ul>
            </section>
        );
    }
}

export default GroupList;