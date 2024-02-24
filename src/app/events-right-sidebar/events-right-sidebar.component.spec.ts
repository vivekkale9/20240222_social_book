import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsRightSidebarComponent } from './events-right-sidebar.component';

describe('EventsRightSidebarComponent', () => {
  let component: EventsRightSidebarComponent;
  let fixture: ComponentFixture<EventsRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
