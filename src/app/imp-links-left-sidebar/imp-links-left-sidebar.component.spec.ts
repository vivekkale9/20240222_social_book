import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpLinksLeftSidebarComponent } from './imp-links-left-sidebar.component';

describe('ImpLinksLeftSidebarComponent', () => {
  let component: ImpLinksLeftSidebarComponent;
  let fixture: ComponentFixture<ImpLinksLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpLinksLeftSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImpLinksLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
