import React from 'react'

import {
    Link, Switch, Route
} from 'react-router-dom'
import { Company, Subdivision } from '../../types/company-page';
import SubdivisionAddList from './SubdivisionAddList';

const renderSubdivisions = (subdivisions: Array<Subdivision>, checkedSubdivisionIds: Array<number>, onChecked: (id: number) => void) => {
    return subdivisions.map(subdivision => {
        return (
            <li key={subdivision.id}>
                {subdivision.name}
                <input checked={checkedSubdivisionIds.findIndex(id => id === subdivision.id) !== -1} type="checkbox" onChange={() => onChecked(subdivision.id)}/>
            </li>
        );
    })
}

interface IProps {
    company: Company,
    onCreateCompany(company: Company): void,
    onUpdateCompany(company: Company): void,
    onDeleteSubdivisions(subdivisionsId: Array<number>, companyId: number): void,
    isNew: boolean,
    history: any
}

interface IState {
    companyName: string;
    companyDescription: string;
    newSubdivisions: Array<Subdivision>;
    checkedOldSubdivisionIds: Array<number>;
    checkedNewSubdivisionIds: Array<number>;
}

class CompanyEditor extends React.Component<IProps, IState> {
    // пользователь может добавить новые подразделения и они будут на одной форме редактирования со старыми. Если он захочет отметить подразделения на удаление, то обработка
    // этого события будет разной для "старых" и "новых" подразделений.
    // ========== Новые подразделения будут создаваться с моковыми отрицательными айдишниками, до их сохранения на сервере, =========
    // ========== для того чтобы различать "старые" и "новые" подразделения ==========
    constructor(props: IProps) {
        super(props);

        this.state = {
            companyDescription: props.company.description,
            companyName: props.company.name,
            newSubdivisions: [],
            checkedNewSubdivisionIds: [],
            checkedOldSubdivisionIds: []
        }
    }


    static getDerivedStateFromProps(nextProps: IProps, prevState: IState) {

    }

    updateSubdivisionCheckedIds = (ids: Array<number>, id: number): Array<number> => {
        const index = ids.findIndex(el => el === id);
        if(index === -1)
            ids.push(id);
        else 
            ids.splice(index, 1);

        return ids;
    }

    onSubdivisionChecked = (id: number) => id > 0 ? this.onOldSubdivisionChecked(id) : this.onNewSubdivisionChecked(id);

    onOldSubdivisionChecked = (id: number): void => {
        const nextCheckedIds = this.updateSubdivisionCheckedIds(this.state.checkedOldSubdivisionIds.slice(), id);
        this.setState({checkedOldSubdivisionIds: nextCheckedIds});
    }

    onNewSubdivisionChecked = (id: number): void => {
        const nextCheckedIds = this.updateSubdivisionCheckedIds(this.state.checkedNewSubdivisionIds.slice(), id);
        this.setState({checkedNewSubdivisionIds: nextCheckedIds});
    }

    onDeleteNewSubdivisions = () => {
        const remainSubdivisions = this.state.newSubdivisions.filter(subdivision => this.state.checkedNewSubdivisionIds.findIndex(id => id === subdivision.id) === -1);
        this.setState({
            newSubdivisions: remainSubdivisions.slice(),
            checkedNewSubdivisionIds: []
        });
    }

    onCreateSubdivisions = (subdivisions: Array<Subdivision>) => {
        const tmp = this.state.newSubdivisions.slice();
        subdivisions.forEach(subdivision => tmp.push(subdivision));
        this.setState({newSubdivisions: tmp});
    }

    onCopmanyNameChange = (name: string) => {
        this.setState({companyName: name});
    }

    onCompanyDescriptionChange = (name: string) => {
        this.setState({companyDescription: name});
    }

    render() {
        return (
            <Switch>
                <Route path="/companies/editor/subdivisionaddlist" render={(props) => <SubdivisionAddList {...props} onCreateSubdivisions={this.onCreateSubdivisions}/>} />
                <Route path="*" render={() => {
                    return (
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            if(this.props.isNew) 
                                this.props.onCreateCompany(new Company({name: this.state.companyName, description: this.state.companyDescription, subdivisions: [...this.state.newSubdivisions]}));
                            else {
                                const company = new Company(this.props.company);
                                company.name = this.state.companyName;
                                company.description = this.state.companyDescription;
                                company.subdivisions = company.subdivisions.concat(this.state.newSubdivisions);
                                this.props.onUpdateCompany(company);
                            }
                            this.props.history.goBack(); 
                        }}>
                            <input value={this.state.companyName} onChange={event => this.onCopmanyNameChange(event.target.value)} type="text" placeholder="Input company name"></input> <br />
                            <textarea value={this.state.companyDescription} onChange={event => this.onCompanyDescriptionChange(event.target.value)} placeholder="Input company description"/> <br />
                            <Link to="/companies/editor/subdivisionaddlist">Add subdivisions</Link>
                            <button type="button" onClick={(event) => {
                                event.preventDefault();
                                if(!confirm('Удалить отмеченные подразделения?')) return;
                                this.onDeleteNewSubdivisions();
                                if(!this.state.checkedOldSubdivisionIds.length) return;
                                this.props.onDeleteSubdivisions(this.state.checkedOldSubdivisionIds, this.props.company.id);
                            }}>Remove subdivisions</button>
                            <ul>
                                {renderSubdivisions(this.state.newSubdivisions, this.state.checkedNewSubdivisionIds, this.onSubdivisionChecked)}
                                {renderSubdivisions(this.props.company.subdivisions, this.state.checkedOldSubdivisionIds, this.onSubdivisionChecked)}
                            </ul>
                            <button type="button" onClick={() => this.props.history.goBack()}>Cancel</button>
                            <button type="submit">Save</button>
                        </form>
                    );
                }} />
            </Switch>
        );
    }
}

export default CompanyEditor;