import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementsRightSidebarComponent } from './advertisements-right-sidebar.component';

describe('AdvertisementsRightSidebarComponent', () => {
  let component: AdvertisementsRightSidebarComponent;
  let fixture: ComponentFixture<AdvertisementsRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisementsRightSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvertisementsRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
