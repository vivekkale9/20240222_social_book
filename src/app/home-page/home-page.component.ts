import { PostsComponent } from './../posts/posts.component';
import { CreatePostComponent } from './../create-post/create-post.component';
import { StoriesComponent } from './../stories/stories.component';
import { ConversationRightSidebarComponent } from './../conversation-right-sidebar/conversation-right-sidebar.component';
import { AdvertisementsRightSidebarComponent } from './../advertisements-right-sidebar/advertisements-right-sidebar.component';
import { EventsRightSidebarComponent } from './../events-right-sidebar/events-right-sidebar.component';
import { ImpLinksLeftSidebarComponent } from './../imp-links-left-sidebar/imp-links-left-sidebar.component';
import { ShortcutsLeftSidebarComponent } from './../shortcuts-left-sidebar/shortcuts-left-sidebar.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavbarComponent,ShortcutsLeftSidebarComponent,
  ImpLinksLeftSidebarComponent,EventsRightSidebarComponent,
  AdvertisementsRightSidebarComponent,ConversationRightSidebarComponent,
  StoriesComponent,CreatePostComponent,PostsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
