import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstShortcutComponent } from './first-shortcut.component';

describe('FirstShortcutComponent', () => {
  let component: FirstShortcutComponent;
  let fixture: ComponentFixture<FirstShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstShortcutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FirstShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
