import numeralDeclination from "./numeral-declination";

const questionDeclinations = [
    'вопрос', 
    'вопроса', 
    'вопросов'
]

export default num => numeralDeclination(num, questionDeclinations);