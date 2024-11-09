import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoaderComponent } from './components/loader/loader.component';
<<<<<<< HEAD

import { CommonModule } from '@angular/common';
=======
import { CommonModule } from '@angular/common';

>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ResumeComponent,
    ContactComponent,
    GalleryComponent,
    TestimonialsComponent,
    SkillsComponent,
<<<<<<< HEAD
    LoaderComponent,

=======
    LoaderComponent
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    CommonModule,
        

  
    
    
=======
    AppRoutingModule,
    CommonModule

>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
