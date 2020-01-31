import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EventSummary, EventResolved } from 'src/app/Model/eventSummay';

@Component({
  selector: 'app-event-edit-info',
  templateUrl: './event-edit-info.component.html',
  styleUrls: ['./event-edit-info.component.scss']
})
export class EventEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  event: EventSummary;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      // if (this.productForm) {
      //   this.productForm.reset();
      // }

      const resolvedData: EventResolved = data['resolvedData'];
      this.errorMessage = resolvedData.error;

      this.event = resolvedData.eventSummary;
      console.log(1);
      console.log(this.event);
    });
  }

}
