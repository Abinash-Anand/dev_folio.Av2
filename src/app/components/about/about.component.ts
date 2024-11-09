<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
<<<<<<< HEAD
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
longBio: any = {
  introduction: 'Hello! I’m Abinash Anand, a committed Software Engineer with a strong focus on full-stack development, particularly in the MEAN (MongoDB, Express.js, Angular, Node.js) stack. My passion for building robust, scalable applications drives me to create impactful digital solutions tailored to real-world needs. Over the years, I’ve developed a diverse skill  set spanning UI/UX design, API integration, database management, and DevOps. I am skilled in  creating interactive, user-friendly front ends using frameworks like Bootstrap, Material UI,   and Three.js, while ensuring back-end security and performance with AWS and Docker. This  comprehensive approach enables me to deliver end-to-end solutions that are both efficient and adaptable.',

  sections: [
    {
      heading: 'What I Offer',
      items: [
        {
          subHeading: 'Technical Proficiency',
          content: `My background in the MEAN stack and full development lifecycle gives me a strong foundation for building high-quality applications, from frontend interfaces to backend architectures.`
        },
        {
          subHeading: 'Problem-Solving Mindset',
          content: `I approach projects with a critical eye, breaking down complex issues to find effective solutions. My goal is to deliver applications that enhance user experience and drive performance.`
        },
        {
          subHeading: 'Collaboration & Communication',
          content: `I value teamwork and understand the importance of clear communication.Working with designers, other developers, and clients, I ensure alignment and smooth project  progression. I’m also comfortable with Agile and Scrum methodologies, making me adaptable to dynamic environments.`
        },
        {
          subHeading: 'User-Centric Focus',
          content: `I prioritize UI/UX design principles to create intuitive, engaging applications that users find seamless to navigate.`
        }
      ]
    }
  ],

  conclusion: `By staying updated on new tech and best practices, I continuously refine my skills to deliver the highest quality work. I’m ready to contribute my expertise to help your team achieve its goals.`
};

 


  // Full bio
  truncatedBio: string = `Hello! I’m Abinash Anand, a committed Software Engineer with a strong focus on full-stack development, particularly in the MEAN (MongoDB, Express.js, Angular, Node.js) stack. My passion for building robust, scalable applications drives me to create impactful digital solutions tailored to real-world needs.
Over the years  MORE... `
  showFullBio: boolean = false;

  ngOnInit(): void {
    // Set truncatedBio to a subset of longBio
    // this.truncatedBio = this.longBio.substring(0, 112); // Limit to 150 characters or as needed
  }
readMore(){
  
  }
    showResume() {
    const link = document.createElement('a');
    link.href = 'assets/abinash_anand-resume (1).pdf';
    link.download = 'abinash_anand-resume(1).pdf';
    link.dispatchEvent(new MouseEvent('click'))
}
  
}


=======
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
