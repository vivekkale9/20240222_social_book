import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdShortcutComponent } from './third-shortcut.component';

describe('ThirdShortcutComponent', () => {
  let component: ThirdShortcutComponent;
  let fixture: ComponentFixture<ThirdShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdShortcutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
