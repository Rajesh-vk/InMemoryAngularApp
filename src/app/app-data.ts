import {InMemoryDbService} from 'angular-in-memory-web-api';
import { EventSummaryData } from './dbData/eventSummary';
import { AnswerData } from './dbData/answerData';
import { AnswerTypeData } from './dbData/answerTypeData';
import { EmployeeEventLinkData } from './dbData/employeeEventLinkData';
import { EmployeeData } from './dbData/empolyeeDetailsData';

import { ParticipantTypeData } from './dbData/participantTypeData';
import { QuestionData } from './dbData/questionData';
import { UserRoleData } from './dbData/userRoleData';

export class AppData implements InMemoryDbService {

createDb() {
    const eventSummarys = EventSummaryData.eventsSummary;
    return {eventSummarys};
}
}
