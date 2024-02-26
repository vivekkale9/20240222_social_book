import { Routes } from '@angular/router';
import { FirstShortcutComponent } from './first-shortcut/first-shortcut.component';
import { SecondShortcutComponent } from './second-shortcut/second-shortcut.component';
import { ThirdShortcutComponent } from './third-shortcut/third-shortcut.component';
import { FourthShortcutComponent } from './fourth-shortcut/fourth-shortcut.component';
import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
    {path:'home', component:HomePageComponent},
    {path:'shortcut1', component:FirstShortcutComponent},
    {path:'shortcut2', component:SecondShortcutComponent},
    {path:'shortcut3', component:ThirdShortcutComponent},
    {path:'shortcut4', component:FourthShortcutComponent}
];
