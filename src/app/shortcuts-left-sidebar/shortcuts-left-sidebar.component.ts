import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-shortcuts-left-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shortcuts-left-sidebar.component.html',
  styleUrl: './shortcuts-left-sidebar.component.css'
})
export class ShortcutsLeftSidebarComponent {
  shortcuts:Array<{image_url:String,text:String}>= [
    {
      image_url:
        'https://images.unsplash.com/photo-1708139374769-67294f53fcc5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'beach',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1708368954671-f383a1887157?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'food',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1708576086347-1e1929b43226?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'party',
    },
    {
      image_url:
        'https://images.unsplash.com/photo-1682687221363-72518513620e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text: 'castle',
    },
  ];
}
