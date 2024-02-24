import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutsLeftSidebarComponent } from './shortcuts-left-sidebar.component';

describe('ShortcutsLeftSidebarComponent', () => {
  let component: ShortcutsLeftSidebarComponent;
  let fixture: ComponentFixture<ShortcutsLeftSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortcutsLeftSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortcutsLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
