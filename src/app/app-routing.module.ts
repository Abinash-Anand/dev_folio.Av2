import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all components
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProfileComponent } from './components/about/profile/profile.component';
import { MyProjectsComponent } from './components/projects/my-projects/my-projects.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  // { path: 'home', component: HomeComponent },
  {
    path: 'about', component: AboutComponent, children: [
   { path:'profile', component:ProfileComponent}
  ]},
  {
    path: 'projects', component: ProjectsComponent, children: [
    {path:'my-projects', component:MyProjectsComponent}
  ]},
  { path: 'resume', component: ResumeComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'gallery', component: GalleryComponent },
  // { path: 'testimonials', component: TestimonialsComponent },
  { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '/home' } // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
