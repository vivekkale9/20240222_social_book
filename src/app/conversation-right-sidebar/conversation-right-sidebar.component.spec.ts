import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationRightSidebarComponent } from './conversation-right-sidebar.component';

describe('ConversationRightSidebarComponent', () => {
  let component: ConversationRightSidebarComponent;
  let fixture: ComponentFixture<ConversationRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConversationRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConversationRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
