import{ Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ProjectComponent } from '../project/project.component';
import { AboutComponent } from '../about/about.component';
import { ContactusComponent } from '../contactus/contactus.component';
import { TeamComponent } from '../team/team.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'about', component: AboutComponent },
    { path: 'team', component: TeamComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];