<<<<<<< HEAD
import { Component, ElementRef, ViewChild } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
<<<<<<< HEAD
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('nameInput') nameInput!: ElementRef;
  @ViewChild('emailInput') emailInput!: ElementRef;
  @ViewChild('subjectInput') subjectInput!: ElementRef;
  @ViewChild('messageInput') messageInput!: ElementRef;

  errors: { [key: string]: string } = {};

  // Method to collect data and call mail service on button click
  onSendMessage() {
    const formData = {
      name: this.nameInput.nativeElement.value,
      email: this.emailInput.nativeElement.value,
      subject: this.subjectInput.nativeElement.value,
      message: this.messageInput.nativeElement.value
    };
    
    console.log("Collected Data:", formData); // Log data for verification

    // Validate the data
    if (this.isValid(formData)) {
      this.openMailClient(formData); // Call mail service if data is valid
    } else {
      console.error('Validation failed', this.errors);
    }
  }

  isValid(formData: { name: string; email: string; subject: string; message: string }): boolean {
    this.errors = {}; // Clear previous errors

    if (!formData.name || formData.name.length < 2) {
      this.errors['name'] = 'Name should be at least 2 characters';
    }
    if (!formData.email.includes('@')) {
      this.errors['email'] = 'Enter a valid email';
    }
    if (!formData.subject) {
      this.errors['subject'] = 'Subject is required';
    }
    if (!formData.message || formData.message.length < 10) {
      this.errors['message'] = 'Message should be at least 10 characters';
    }

    return Object.keys(this.errors).length === 0;
  }

  openMailClient(formData: { name: string; email: string; subject: string; message: string }) {
    console.log('Opening Gmail with:', formData); // Debug log

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Message from: ${formData.name} (${formData.email})\n\n${formData.message}`);
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=anandabinash25@gmail.com&su=${subject}&body=${body}`;

    // Open Gmail in a new tab
    const newWindow = window.open(gmailLink, '_blank');

    // Check if the window opened successfully
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      console.error('Failed to open Gmail. This may be due to browser popup settings.');
    }
  }
=======
  styleUrl: './contact.component.css'
})
export class ContactComponent {

>>>>>>> 83ed222e4ddca81e671812a87922ba13f1b587ef
}
