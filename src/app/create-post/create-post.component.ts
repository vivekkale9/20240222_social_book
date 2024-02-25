import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.css'
})
export class CreatePostComponent {
  profile_image = "https://images.unsplash.com/photo-1707707289494-af5b6017f7ab?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

   // object for name
  full_name={
  first_name:'Lalu',
  last_name:'Prasad',
 }
}
