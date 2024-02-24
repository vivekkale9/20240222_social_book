import { Component,OnInit} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component'
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  profile_image = "https://images.unsplash.com/photo-1707707289494-af5b6017f7ab?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
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

  // array for the events 
 events:Array<{event_date:String,event_month:String,
  event_desc:String,event_location:String}> =[
  {
    event_date:'18',
    event_month:'June',
    event_desc:'Zomaland',
    event_location:'Hyderabad',
  },
  {
    event_date:'20',
    event_month:'July',
    event_desc:'UFC',
    event_location:'Pune',
  }
 ]

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