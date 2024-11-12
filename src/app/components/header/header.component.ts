import { Component, HostListener } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   isNavbarOpen = false;
  isScrolled = false;
 
  constructor(private projectService: ProjectService){}
  // Toggle the navbar open state when hamburger is clicked
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
    this.updateNavbarPosition();
  }

  // Listen to the scroll event and set isScrolled
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
    this.updateNavbarPosition();
  }

  // Add or remove the fixed-navbar class based on state
  updateNavbarPosition() {
    const navbarElement = document.querySelector('.navbar') as HTMLElement;
    if (this.isNavbarOpen && this.isScrolled) {
      navbarElement.classList.add('fixed-navbar');
    } else {
      navbarElement.classList.remove('fixed-navbar');
    }
  }
  onProjectsSection() {
    
    this.projectService.openProjectSection = true
}
}
