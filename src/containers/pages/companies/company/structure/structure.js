import React, { Component } from "react";
import withInitialGroupLoading from "../../../../../hoc/with-initial-group-loading";
import { Route, Redirect } from "react-router";
import { Switch } from "react-router-dom";
import withStaffixService from "../../../../../hoc/hoc-services/with-staffix-service";
import { connect } from "react-redux";
import { saveLoadedSubdivisions } from "../../../../../action-creators/companies-page/company-structure/entities";
import { AddPositionForm, EditPositionForm } from "./position-form";
import SubdivisionList from "./subdivision-list";
import { EditSubdivisionForm, AddSubdivisionForm } from "./subdivision-form";
import PositionList from "./position-list/position-list";
import SubdivisionAsideList from "./subdivision-aside-list";

const withGetGroups = WrappedContainer => {
    return class extends Component {
        render() {
            const { dispatch, staffixService, match: { params: { idCompany } } } = this.props;

            const getGroups = async () => {
                const subdivisions = await staffixService.getSubdivisions(idCompany)

                dispatch(saveLoadedSubdivisions(subdivisions))
            }

            return <WrappedContainer {...this.props} getGroups={getGroups} />
        }
    }
}

const withDefineRedirectId = WrappedContainer => {
    return class extends Component {
        render() {
            const {
                subdivisions
            } = this.props

            return <WrappedContainer redirectId={subdivisions[0].id} {...this.props} /> 
        }
    }
}

const Structure = ({
    redirectId,
    reload,
    ...others
}) => {

    return (
        <article className="structure">
            <SubdivisionAsideList />
            <Switch>
                <Redirect exact from="/companies/:idCompany/structure" to={`/companies/:idCompany/structure/subdivisions/${redirectId}`} />
                <Route exact path="/companies/:idCompany/structure/add-position" render={(props) => <AddPositionForm {...props} {...others} />}/>
                <Route exact path="/companies/:idCompany/structure/subdivision/:idSubdivision/edit-position/:idPosition" render={(props) => <EditPositionForm {...props} {...others} />}/>
                <Route exact path="/companies/:idCompany/structure/subdivisions/edit" render={(props) => <SubdivisionList reload={reload} {...props} {...others} /> }/>
                <Route exact path="/companies/:idCompany/structure/subdivisions/edit/:idSubdivision" render={(props) => <EditSubdivisionForm reload={reload} {...props} {...others} />}/>
                <Route exact path="/companies/:idCompany/structure/subdivisions/add" render={(props) => <AddSubdivisionForm reload={reload} {...props} {...others} />}/>
                <Route exact path="/companies/:idCompany/structure/subdivisions/:idSubdivision" render={(props) => <PositionList {...props} {...others} />}/>
            </Switch>
        </article>
    )
}

const mapStoreToProps = ({
    companiesPage: {
        companyStructure: {
            entities: {
                subdivisions
            }
        }
    }
}) => {
    return {
        subdivisions
    }
}

export default connect(mapStoreToProps)(
                        withStaffixService(
                            withGetGroups(
                                withInitialGroupLoading(
                                    withDefineRedirectId(Structure)))))