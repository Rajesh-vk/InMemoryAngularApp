import { Question } from '../Model/Question';


export class QuestionData {
    static Questions: Question[] = [
        {
            questionId: '1',
            questionDesc: 'Hey there,Please share the feedback for unregistered\r\n from the event.',
            participantTypeId: '3'
        },
        {
            questionId: '2',
            questionDesc: 'How  do you rate the overall event.',
            participantTypeId: '1'
        },
        {
            questionId: '3',
            questionDesc: 'What did you like about this volunteers activity.',
            participantTypeId: '1'
        },
        {
            questionId: '4',
            questionDesc: 'What can be improve in this volunteers activity.',
            participantTypeId: '1'
        },
        {
            questionId: '3',
            questionDesc: 'Hey there,you registered for the event.we would like to know the reason for not joining the event.',
            participantTypeId: '2'
        }
    ];
}
