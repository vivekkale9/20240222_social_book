import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conversation-right-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation-right-sidebar.component.html',
  styleUrl: './conversation-right-sidebar.component.css'
})
export class ConversationRightSidebarComponent {
   // array for the conversation chats
 conversation:Array<{convo_name:String,convo_img_url:String}>=[
  {
    convo_name:'Raju Bhai',
    convo_img_url:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    convo_name:'Chotu Don',
    convo_img_url:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    convo_name:'Begum',
    convo_img_url:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    convo_name:'Noor Jaan',
    convo_img_url:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  }
 ]
}
