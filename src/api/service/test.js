import io from 'api/io'
export const getQuestionList = async (params) => await io.post(io.questionList, params)
