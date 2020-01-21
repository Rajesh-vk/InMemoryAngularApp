import {InMemoryDbService} from 'angular-in-memory-web-api';
import { EventSummaryData } from './dbData/eventSummary';

export class AppData implements InMemoryDbService {

createDb() {
    const eventSummarys = EventSummaryData.eventsSummary;
    return {eventSummarys};
}
}
