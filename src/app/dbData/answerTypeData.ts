import { AnswerType } from '../Model/AnswerType';


export class AnswerTypeData {
    static AnswerTypes: AnswerType[] = [
        {
            answerTypeName: 'Multiple Answers',
            answerTypeId: 1,
        },
        {
            answerTypeName: 'Free Text',
            answerTypeId: 2,
        },
    ];
}
