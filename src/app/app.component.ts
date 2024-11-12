import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'dev_folio.Av2';
   openProjectSection: boolean = false;
  scrollIsTrue: boolean = true;
@ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;
  constructor(private projectService: ProjectService) {
    
  }
  ngOnInit(): void {
    this.openProjectSection = this.projectService.openProjectSection
    console.log("openProjects: ", this.projectService.openProjectSection)
  }
  ngAfterViewInit() {
    this.checkSectionInView();
    
  }
   @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkSectionInView();
  }

  checkSectionInView() {
    const sections = document.querySelectorAll('.parallax-section');

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight - 100) { // Adjust threshold for earlier trigger
        section.classList.add('show');
      } else {
        section.classList.remove('show'); // Remove for hiding when scrolling back up
      }
    });
  }

}
