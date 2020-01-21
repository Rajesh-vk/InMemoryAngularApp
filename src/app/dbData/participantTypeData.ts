import { ParticipantType } from '../Model/ParticipantType';


export class ParticipantTypeData {
    static eventsSummary: ParticipantType[] = [
        {
            participantTypeName: 'Participated',
            participantTypeId: 1,
        },
        {
            participantTypeName: 'Not Participated',
            participantTypeId: 2,
        },
        {
            participantTypeName: 'Unregistered',
            participantTypeId: 2,
        },
    ];
}
