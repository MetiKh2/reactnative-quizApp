export const getAnswers = (question) => {
    let answers =[...question.incorrect_answers]
    const tempIndex = Math.floor(Math.random() * 4)
    if (tempIndex === 3) {
        answers.push(question.correct_answer)
    } else {
        answers.push(answers[tempIndex])
        answers[tempIndex] = question.correct_answer
    }
    return answers
}