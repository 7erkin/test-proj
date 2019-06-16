import React from 'react'
import { Typography } from '@material-ui/core';
import CustomSearchView from '../../../../common/custom-search-view';
import CustomAddButton from '../../../../common/custom-add-button';
import ContentTable from '../content-table';

import './style.css'

const QuestionsAffiliationView = ({
    competenceGroupDescription,
    onAddQuestionClick,
    content,
    competenciesGroupId
}) => {
    return (
        <section className="questions-affiliation">
            <Typography variant="body1" gutterBottom>
                {competenceGroupDescription}
            </Typography>
            <CustomSearchView value={''} onChange={() => {}} placeholder="Введите название сущности..." />
            <CustomAddButton onClick={onAddQuestionClick}>Добавить вопрос</CustomAddButton>
            <ContentTable
                competenciesGroupId={competenciesGroupId}
                values={content} 
                columns={[
                    'Название компетенции', 
                    'Описание компетенции', 
                    'Количество вопросов']} />
        </section>
    );
}

export default QuestionsAffiliationView;