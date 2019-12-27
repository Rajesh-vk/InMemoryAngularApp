import {EventSummaryData} from './eventDetails';
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class AppData implements InMemoryDbService {

createDb(){

    const eventSummarys = EventSummaryData.eventSummarys;
}


}