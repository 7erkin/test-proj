import React from 'react'
import DeleteFormView from '../../delete-form-view/delete-form-view';
import DeleteFormTableView from '../../delete-form-table-view/delete-form-table-view';
import { TableRow, TableCell } from '@material-ui/core';

const QuestionListView = ({
    questions,
    deletedQuestions,
    onDeleteQuestions,
    onAddQuestion,
    onQuestionCheck,
    competenceName
}) => {
    return (
        <DeleteFormView 
            description={`Компетенция: ${competenceName}`}
            hasCheckedItems={!!deletedQuestions.length}
            searchAble={false}
            addButton={{
                label: 'Добавить вопрос',
                onClick: onAddQuestion
            }}
            deleteButton={{
                label: 'Удалить',
                onClick: onDeleteQuestions
            }}>
            <DeleteFormTableView 
                columns={['Вопрос', '']}
                items={questions} 
                renderRow={question => {
                    const { id, body } = question;
                    
                    return (
                        <TableRow>
                            <TableCell>{body}</TableCell>
                            <TableCell>
                                <input 
                                    type="checkbox" 
                                    checked={deletedQuestions.indexOf(id) !== -1} 
                                    onChange={() => onQuestionCheck(id)} />
                            </TableCell>
                        </TableRow>
                    );
                }} />
        </DeleteFormView>
    );
}

export default QuestionListView;