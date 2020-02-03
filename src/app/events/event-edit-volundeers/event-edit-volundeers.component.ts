import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventSummary, EventResolved } from 'src/app/Model/eventSummay';

@Component({
  selector: 'app-event-edit-volundeers',
  templateUrl: './event-edit-volundeers.component.html',
  styleUrls: ['./event-edit-volundeers.component.scss']
})
export class EventEditVolundeersComponent implements OnInit {

  

  errorMessage: string;
  event: EventSummary;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      const resolvedData: EventResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;
      this.event = resolvedData.eventSummary;
      console.log(1);
      console.log(this.event);
    });
  }

}
