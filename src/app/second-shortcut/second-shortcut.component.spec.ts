import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondShortcutComponent } from './second-shortcut.component';

describe('SecondShortcutComponent', () => {
  let component: SecondShortcutComponent;
  let fixture: ComponentFixture<SecondShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondShortcutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
