import IndicatorAPI from "./indicator-api";
import CompetenceAPI from "./competence-api";
import CompanyAPI from "./company-api";

class DummyStaffixService {
    constructor() {
        this._indicatorAPI = new IndicatorAPI(); 
        this._competenceAPI = new CompetenceAPI();
        this._companyAPI = new CompanyAPI();
    }

    // ########## indicator API ##########
    async getIndicators(indicatorGroupId) {
        return this._indicatorAPI.getIndicators(indicatorGroupId);
    }

    async isIndicatorExist(indicatorName){
        return this._indicatorAPI.isIndicatorExist(indicatorName);
    }

    async getIndicatorsByPattern(indicatorGroupId, indicatorNamePattern){
        return this._indicatorAPI.getIndicatorsByPattern(indicatorGroupId, indicatorNamePattern);
    }

    async getIndicatorGroups() {
        return this._indicatorAPI.getIndicatorGroups();
    }

    async deleteIndicators(indicatorGroupId, indicatorIds) {
        return this._indicatorAPI.deleteIndicators(indicatorGroupId, indicatorIds);
    }

    async deleteIndicatorGroups(indicatorGroupIds) {
        return this._indicatorAPI.deleteIndicatorGroups(indicatorGroupIds);
    }

    async updateIndicator(indicator) {
        return this._indicatorAPI.updateIndicator(indicator);
    }

    async createIndicator(indicator) {
        return this._indicatorAPI.createIndicator(indicator);
    }

    async updateIndicatorGroup(indicatorGroup) {
        return this._indicatorAPI.updateIndicatorGroup(indicatorGroup);
    }

    async createIndicatorGroup(indicatorGroup) {
        return this._indicatorAPI.createIndicatorGroup(indicatorGroup);
    }

    // ########## competence API ##########
    async getCompetenceByNamePattern(competenceGroupId, namePattern) {
        return this._competenceAPI.getCompetenceByNamePattern(competenceGroupId, namePattern);
    }

    async getCompetenceGroups() {
        return this._competenceAPI.getCompetenceGroups();
    }

    async getCompetencies(id) {
        return this._competenceAPI.getCompetenciesByGroupId(id);
    }

    async createCompetenceGroup(competenceGroup) {
        return this._competenceAPI.createCompetenceGroup(competenceGroup);
    }
    
    async createCompetence(competence) {
        return this._competenceAPI.createCompetence(competence);
    }

    async updateCompetenceGroup(competenceGroup) {
        return this._competenceAPI.updateCompetenceGroup(competenceGroup);
    }

    async updateCompetence(competence) {
        return this._competenceAPI.updateCompetence(competence);
    }

    async deleteCompetenceGroups(ids) {
        return this._competenceAPI.deleteCompetenceGroups(ids);
    }

    async deleteCompetencies(competenceGroupId, competenceIds) {
        return this._competenceAPI.deleteCompetencies(competenceGroupId, competenceIds);
    }

    async isCompetenceGroupExist(competenceGroupName) {
        return this._competenceAPI.isCompetenceGroupExist(competenceGroupName);
    }

    async isCompetenceExist(competenceName) {
        return this._competenceAPI.isCompetenceExist(competenceName);
    }

    async getCompetenceIndicators(competenceGroupId, competenceId) {
        return this._competenceAPI.getCompetenceIndicators(competenceGroupId, competenceId);
    }

    // ########## company API ##########
    async getCompanyList() {
        return this._companyAPI.getCompanyList();
    }

    async getAnyCompanies() {
        return this._companyAPI.getAnyCompanies()();
    }

    async getCompany(companyId) {
        return this._companyAPI.getCompany(companyId);
    }

    async createCompany(company){
        return this._companyAPI.createCompany(company);
    }

    async updateCompany(company) {
        return this._companyAPI.updateCompany(company);
    }

    async deletePointedSubdivisions(companyId, subdivisionIds) {
        return this._companyAPI.deletePointedSubdivisions(companyId, subdivisionIds);
    }
}

export default DummyStaffixService;