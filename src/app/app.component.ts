import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
import { ShortcutsLeftSidebarComponent } from './shortcuts-left-sidebar/shortcuts-left-sidebar.component';
import { ImpLinksLeftSidebarComponent } from './imp-links-left-sidebar/imp-links-left-sidebar.component';
import { EventsRightSidebarComponent } from './events-right-sidebar/events-right-sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,NavbarComponent,ShortcutsLeftSidebarComponent,
    ImpLinksLeftSidebarComponent,EventsRightSidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  profile_image = "https://images.unsplash.com/photo-1707707289494-af5b6017f7ab?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



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

 // object for name
 full_name={
  first_name:'Lalu',
  last_name:'Prasad',
 }

 // array for posts
 posts:Array<{imgSrc:Object,userName:Object,timestamp:String,
  postText:String,postImgSrc:String,likeCount:Number,
  commentCount:Number,shareCount:Number}> = [
  {
    imgSrc: this.profile_image,
    userName: this.full_name.first_name+" "+this.full_name.last_name,
    timestamp: 'June 2 2023, 16:40 pm',
    postText:
    "Tasty Tasty Modak made by me hehe",
    postImgSrc: 'https://images.unsplash.com/photo-1630870487699-1a6d8b24cc1f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likeCount: 855,
    commentCount: 55,
    shareCount: 52,
  },
  {
    imgSrc: this.profile_image,
    userName: this.full_name.first_name+" "+this.full_name.last_name,
    timestamp: 'June 2 2023, 16:40 pm',
    postText:
    "You look like this in Holi not like alia bhatt",
    postImgSrc: 'https://images.unsplash.com/photo-1467307983825-619715426c70?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likeCount: 855,
    commentCount: 55,
    shareCount: 52,
  },
  {
    imgSrc: this.profile_image,
    userName: this.full_name.first_name+" "+this.full_name.last_name,
    timestamp: 'July 2 2023, 18:40 pm',
    postText:
    "Because Modak there is also kandil",
    postImgSrc: 'https://images.unsplash.com/photo-1700197046213-f406817e11e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likeCount: 85,
    commentCount: 5,
    shareCount: 2,
  },
  {
    imgSrc: this.profile_image,
    userName: this.full_name.first_name+" "+this.full_name.last_name,
    timestamp: 'January 5 2023, 8:40 pm',
    postText:
    "Statue of some great personality",
    postImgSrc: 'https://images.unsplash.com/photo-1699617286672-de01ec57b87e?q=80&w=1983&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likeCount: 112,
    commentCount: 112,
    shareCount: 85,
  },
  {
    imgSrc: this.profile_image,
    userName: this.full_name.first_name+" "+this.full_name.last_name,
    timestamp: 'June 2 2023, 16:40 pm',
    postText:
    "DM for photoshoots",
    postImgSrc: 'https://images.unsplash.com/photo-1498830923224-e1c12d1564a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    likeCount: 855,
    commentCount: 55,
    shareCount: 52,
  },
];
}