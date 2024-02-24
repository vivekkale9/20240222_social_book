import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-right-sidebar.component.html',
  styleUrl: './events-right-sidebar.component.css'
})
export class EventsRightSidebarComponent {
    // array for the events 
 events:Array<{event_date:String,event_month:String,
  event_desc:String,event_location:String}> =[
  {
    event_date:'18',
    event_month:'June',
    event_desc:'Zomaland',
    event_location:'Hyderabad',
  },
  {
    event_date:'20',
    event_month:'July',
    event_desc:'UFC',
    event_location:'Pune',
  }
 ]
}
