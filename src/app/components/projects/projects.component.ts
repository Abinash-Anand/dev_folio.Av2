<<<<<<< HEAD
import { Component, HostListener } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
<<<<<<< HEAD
  projects: any[] = [
    {
    "title": "CloudCompass",
    "description": "CloudCompass is a responsive weather application that displays real-time weather information based on the user's location or any searched location. It utilizes the OpenCage Geocode API and OpenStreetMap to fetch accurate location data. Users can view temperature, humidity, wind speed, and more. The app features a clean, modern UI using Bootstrap, and employs Flexbox and Grid for layout. Built with HTML, CSS, Bootstrap, and JavaScript, it offers a smooth user experience across devices.",
    "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap", "OpenCage API", "OpenStreetMap", "Flexbox", "Grid"],
    "image": "assets/cloudcompass.png",
    "liveLink": "https://abcloudcompass.netlify.app/",
    "githubLink": "https://github.com/Abinash-Anand/WeatherApp"
    },
       {
    "title": "CORD.ai Website Development",
    "description": "A responsive website for CORD.ai, focusing on an inclusive AI research community. As the frontend developer, I was responsible for building, maintaining, and updating the website with new designs, ensuring a seamless user experience. Over the course of my internship and subsequent tenure, I handled various aspects, including HTML/CSS/JS development, Bootstrap integration, and implementing UI improvements based on user feedback.",
    "technologies": ["HTML", "CSS", "JavaScript", "Bootstrap"],
    "image": "assets/cordai.png",
    "liveLink": "https://cordai.netlify.app/", // Update with the actual link if available
    "githubLink": "https://github.com/CORD-ai/cord-website" // Replace with the actual GitHub link if available
}, 
      {
    "title": "User Management App",
    "description": "User Management App is a full-stack application built during backend development learning. The app features a dashboard with two main actions: 'Create User' and 'Show Database.' Users can be created, fetched, updated, and deleted from the MongoDB database, showcasing CRUD operations. With pagination implemented on the server-side, the app allows smooth navigation of large datasets. It uses EJS for templating, jQuery for AJAX interactions, and Node.js with Express for backend functionality.",
    "technologies": ["Node.js", "Express", "EJS", "MongoDB", "Mongoose", "AJAX", "jQuery", "JavaScript", "Body-Parser", "CORS"],
    "image": "assets/EJS-User-management-2.png",
    "liveLink": "https://user-management-service-f59k.onrender.com/",
    "githubLink": "https://github.com/Abinash-Anand/Phase--Form-Validator-App"
},
  
{
  "projectName": "Real-Time Ride Booking and Driver Management System",
  "description": "This project is a real-time ride-booking and driver management application built using the MERN stack with a focus on real-time updates, payment handling, and distributed system management. The system allows users (drivers and customers) to book rides, handle driver assignments, and track the status of their rides in real-time. It leverages multiple advanced technologies to ensure scalability, performance, and reliability.\n\nKey Features:\n\n1. **Real-time Communication**: The app uses Socket.io to establish real-time, bidirectional communication between the server and clients. As a result, booking updates, driver assignments, and other important status changes are reflected instantly across all users.\n\n2. **Distributed System with Clustering**: Node.js Clustering ensures that the app can handle heavy traffic by forking multiple worker processes based on the number of CPU cores, improving the app’s ability to scale and manage multiple simultaneous requests.\n\n3. **Session Management with Redis**: The app uses Redis for session management and caching. Redis is leveraged to store user session data, manage active sessions, and automatically clean up expired sessions, ensuring better performance and quick access to frequently used data.\n\n4. **Booking and Ride Management**: MongoDB stores all booking and ride-related information. The system allows users to book rides, assign drivers, and track the status of their rides. Each booking's state (such as Pending, Accepted, or Rejected) is updated in real time based on driver responses.\n\n5. **Payment Integration**: Stripe handles payments for ride bookings, ensuring secure and reliable transactions within the app. This integration makes it possible to charge users and process payments in a seamless manner.\n\n6. **Scheduled Jobs for Driver Reassignments**: The app includes a scheduling system for automatic driver reassignments. If a driver rejects a ride or becomes unavailable, the system automatically schedules the next available driver to take over the ride.\n\n7. **Advanced Error Handling**: Robust error handling ensures that any failures in booking, payment, or driver assignment are gracefully handled and reported back to the users.",
  "technologies": [
    "Backend Development:",
    "Node.js",
    "Express.js",
    "Socket.io",
    "Frontend Communication:",
    "Socket.io Client",
    "Database:",
    "MongoDB",
    "Mongoose",
    "Payment Integration:",
    "Stripe API",
    "Redis:",
    "Redis",
    "Redis Client",
    "Scheduling & Timer Management:",
    "Cron Jobs",
    "Timers",
    "Distributed System:",
    "Node.js Cluster",
    "Load Balancing",
    "Authentication & Session Management:",
    "Cookie-parser",
    "JWT (implied)",
    "API Integration:",
    "Custom API Routing",
    "Error Handling:",
    "Error Handling in Socket Events",
    "Environment Configuration:",
    "dotenv",
    "Middleware:",
    "body-parser",
    "cookie-parser",
    "cors",
    "Scheduler:",
    "Custom scheduling logic (for driver reassignments)",
    "Authentication:",
    "JWT (implied)"
  ],
  "techSkills": {
    "Backend": [
      "Node.js",
      "Express.js"
    ],
    "Real-time Communication": [
      "Socket.io"
    ],
    "Database": [
      "MongoDB",
      "Mongoose"
    ],
    "Session Management": [
      "Redis"
    ],
    "Payment Processing": [
      "Stripe API"
    ],
    "Distributed System": [
      "Node.js Cluster"
    ],
    "Environment Management": [
      "dotenv"
    ],
    "Middleware": [
      "body-parser",
      "cookie-parser",
      "cors"
    ],
    "Scheduler": [
      "Custom scheduling logic (for driver reassignments)"
    ],
    "Authentication": [
      "JWT (implied)"
    ]

  },
  "image": "assets/BookNGo.png",
    "liveLink": "https://eber-1pgav7d7x-abinash-anands-projects.vercel.app/", // Update with the actual link if available
    "githubLink": "https://github.com/Abinash-Anand/Eber-app/tree/main" // 
}

  ]
  selectedProject: {}[] = [
    
  ]
  openModal(value: string) { }
   // Method to handle scroll and show animations
 @HostListener('window:scroll', [])
  onScroll(): void {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        card.classList.add('show');
      }
    });
  }
=======

>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
}
