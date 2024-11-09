<<<<<<< HEAD
import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
<<<<<<< HEAD
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit{
  title = 'dev_folio.Av2';
  scrollIsTrue: boolean = true;
@ViewChild('homeSection') homeSection!: ElementRef;
  @ViewChild('aboutSection') aboutSection!: ElementRef;
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  @ViewChild('projectsSection') projectsSection!: ElementRef;
  @ViewChild('contactSection') contactSection!: ElementRef;

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
=======
  styleUrl: './app.component.css',
  imports: [HeaderComponent]
})
export class AppComponent  {
  title = 'dev_folio.Av2';
  scrollIsTrue: boolean = true;
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef

}
