import React from 'react'

class CompetenceGroupInfo extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <section className="competence-group-info">
                <SearchLine /> <br />
                <button>Add competence</button>
                <CompetenceGroupDescription />
                <CompetenceTable />
            </section>
        );
    }
}