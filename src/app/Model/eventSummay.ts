export interface EventSummary {
            id: string;
            month: string;
            baseLocation: string;
            beneficiaryName: string;
            venueAddress: string;
            councilName: string;
            project: string;
            category: string;
            eventName: string;
            eventDescription: string;
            eventDate: string;
            totalNoVolunteers?: number;
            totalVolunteHours: string;
            totalTravelHours: string;
            overallVolunteeringHours: string;
            livesImpacted?: number;
            activityType: string;
            status: string;
            pocID: string;
            pocName: string;
            pocContactNumber: string;
}
export interface EventResolved {
    eventSummary: EventSummary;
    error?: any;
}
  
