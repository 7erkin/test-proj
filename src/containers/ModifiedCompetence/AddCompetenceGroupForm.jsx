import React from 'react'

class CompetenceGroupInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <form method="POST" action="#" onSubmit={}>
                <input type="text" onChange={} placeholder="Input competence group name" />
                <textarea onChange={} placeholder="Input competence group description"></textarea>
                <button type="button">Cancel</button> <br />
                <button type="submit">Save</button>
            </form>
        );
    }
}