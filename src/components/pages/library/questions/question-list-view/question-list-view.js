import React from 'react'
import { Typography, List, ListItemText, ListItem } from '@material-ui/core';
import CustomDeleteButton from '../../../../common/custom-delete-button';

const QuestionListView = ({
    questions,
    deletedQuestions,
    onSubmit,
    onQuestionCheck,
    competenceName
}) => {
    return (
        <form onSubmit={evt => {
            evt.preventDefault();
            onSubmit();
        }}>
            <Typography variant="body1">
                {competenceName}
            </Typography>
            <CustomDeleteButton disabled={!deletedQuestions.length} type="submit">Удалить</CustomDeleteButton>
            <List>
                {
                    questions.map(el1 => {
                        return (
                            <ListItem key={el1.id}>
                                <ListItemText>{el1.body}</ListItemText>
                                <input type="checkbox" onChange={() => onQuestionCheck(el1.id)} checked={deletedQuestions.some(el2 => el2 == el1.id)}/>
                            </ListItem>
                        );
                    })
                }
            </List>
        </form>
    );
}

export default QuestionListView;