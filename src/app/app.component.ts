import { PostsComponent } from './posts/posts.component';
import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar/navbar.component'
import { ShortcutsLeftSidebarComponent } from './shortcuts-left-sidebar/shortcuts-left-sidebar.component';
import { ImpLinksLeftSidebarComponent } from './imp-links-left-sidebar/imp-links-left-sidebar.component';
import { EventsRightSidebarComponent } from './events-right-sidebar/events-right-sidebar.component';
import { AdvertisementsRightSidebarComponent } from './advertisements-right-sidebar/advertisements-right-sidebar.component';
import { ConversationRightSidebarComponent } from './conversation-right-sidebar/conversation-right-sidebar.component';
import { StoriesComponent } from './stories/stories.component';
import { CreatePostComponent } from './create-post/create-post.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CommonModule,NavbarComponent,ShortcutsLeftSidebarComponent,
    ImpLinksLeftSidebarComponent,EventsRightSidebarComponent,
    AdvertisementsRightSidebarComponent,ConversationRightSidebarComponent,
    StoriesComponent,CreatePostComponent,PostsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {}