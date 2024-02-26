import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthShortcutComponent } from './fourth-shortcut.component';

describe('FourthShortcutComponent', () => {
  let component: FourthShortcutComponent;
  let fixture: ComponentFixture<FourthShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FourthShortcutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FourthShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
