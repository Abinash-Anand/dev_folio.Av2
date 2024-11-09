import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
<<<<<<< HEAD
shortBio: string = 'Hi! I’m Abinash Anand, a versatile Software Engineer who turns complex ideas into high-impact, user-focused solutions. With expertise across front-end, back-end, and everything in between, I build seamless, scalable applications that drive results. Let’s create something extraordinary together!'
constructor(){}
  showResume() {
    const link = document.createElement('a');
    link.href = 'assets/abinash_anand-resume (1).pdf';
    link.download = 'abinash_anand-resume(1).pdf';
    link.dispatchEvent(new MouseEvent('click'))
}
=======

>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
}
