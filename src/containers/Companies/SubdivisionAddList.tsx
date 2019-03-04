import React from 'react'
import { Subdivision } from '../../types/company-page';
import { getRandomId } from '../../library';

interface IProps{
    onCreateSubdivisions(subdivisions: Array<Subdivision>): void,
    history: any
}

interface IState{
    subdivisions: Array<Subdivision>;
    subdivisionName: string;
    subdivisionDescription: string;
}

class SubdivisionAddList extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            subdivisions: [],
            subdivisionName: '',
            subdivisionDescription: ''
        }
    }

    // DRY - bad approach
    onSubdivisionNameChange= (id: number, name: string) => {
        const tmp = this.state.subdivisions.slice();
        const index = tmp.findIndex(el => el.id === id);
        tmp[index].name = name;
        this.setState({
            subdivisions: tmp
        });
    }

    onSubdivisionDescriptionChange = (id: number, description: string) => {
        const tmp = this.state.subdivisions.slice();
        const index = tmp.findIndex(el => el.id === id);
        tmp[index].description = description;
        this.setState({
            subdivisions: tmp
        });
    }

    onDeleteSubdivision = (id: number) => {
        const tmp = this.state.subdivisions.slice();
        const index = tmp.findIndex(el => el.id === id);
        if(index !== -1) {
            tmp.splice(index, 1);
            this.setState({subdivisions: tmp});
        }
    }
    onCreateSubdivision = (subdivision: Subdivision) => {
        const tmp = this.state.subdivisions.slice();
        tmp.push(subdivision);
        this.setState({
            subdivisions: tmp,
            subdivisionName: '',
            subdivisionDescription: ''
        });
    }

    render() {
        return(
            <section>
                <form onSubmit={(event) => {
                    event.preventDefault();
                    this.onCreateSubdivision({
                        id: -getRandomId(), 
                        name: this.state.subdivisionName, 
                        description: this.state.subdivisionDescription
                    });
                }}>
                    <input value={this.state.subdivisionName} onChange={(event) => this.setState({subdivisionName: event.target.value})} type="text" placeholder="Input subdivision name"></input> <br/>
                    <textarea value={this.state.subdivisionDescription} onChange={(event) => this.setState({subdivisionDescription: event.target.value})} placeholder="Input subdivision description"></textarea> <br/>
                    <button type="submit">Add</button>
                </form>
                <form onSubmit={event => {
                    event.preventDefault();
                    this.props.onCreateSubdivisions(this.state.subdivisions);
                    this.props.history.goBack();
                }}>
                    <ul>
                        {this.state.subdivisions.map(subdivision => {
                            return (
                                <li key={subdivision.id}>
                                    <input onChange={event => this.onSubdivisionNameChange(subdivision.id, event.target.value)} value={subdivision.name} type="text" placeholder="Input subdivision name"></input> <br/>
                                    <textarea onChange={event => this.onSubdivisionDescriptionChange(subdivision.id, event.target.value)} value={subdivision.description} placeholder="Input subdivision description"></textarea> <br/>
                                    <button type="button" onClick={() => this.onDeleteSubdivision(subdivision.id)}>Delete</button>
                                </li>
                            );
                        })}
                    </ul>
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => this.props.history.goBack()}>Cancel</button>
                </form>
            </section>
        );
    }
}

export default SubdivisionAddList;