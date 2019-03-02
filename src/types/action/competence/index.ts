import IAction from "../index";
import { CompetenceGroup, Competence, CompetenceStore } from "../../competence-page";

export interface IDeleteCompetenceGroups extends IAction{
    payload: {
        ids: Array<number>
    }
}

export interface ICreateCompetenceGroup extends IAction{
    payload: {
        competenceGroup: CompetenceGroup
    }
}

export interface ICreateCompetence extends IAction{
    payload: {
        competence: Competence,
        competenceGroupId: number
    }
}

export interface IDeleteCompetence extends IAction{
    payload: {
        competenceId: number,
        competenceGroupId: number
    }
}

export interface IUpdateCompetence extends IAction{
    payload: {
        competence: Competence,
        competenceGroupId: number
    }
}

export interface ISaveLoadedCompetence extends IAction{
    payload: {
        competenceStore: CompetenceStore
    }
}