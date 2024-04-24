import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  scriptURL = "https://script.google.com/macros/s/AKfycbykj5spW6e_xQnzv9jOAI5UepVpEklhAAeyA_8rNu-unSLGrUnu5Yq4AsSDopeMkMIj/exec";

  onSubmit(contactForm: any) {
    const formData = new FormData();
    formData.append('Name', contactForm.Name);
    formData.append('Number', contactForm.Number);
    formData.append('Email', contactForm.Email);
    formData.append('Education',contactForm.Education);
    formData.append('internortraining',contactForm.internortraining);
    formData.append('course',contactForm.course);
    formData.append('DateofBirth',contactForm.DateofBirth);
    formData.append('specification',contactForm.specification);
    formData.append('collegename',contactForm.collegename);
    formData.append('place',contactForm.place);
    formData.append('Message',contactForm.Message)

    fetch(this.scriptURL, { method: 'POST', body: formData })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        window.location.reload();
      })
      .catch(error => console.error('Error!', error.message));
  }


  downloadFile() {
    const url = 'https://drive.google.com/file/d/1fWX0tkfjDJObQoMMl6sypn1_NxFQ_trl/view?usp=sharing'; 
    const link = document.createElement('a');
    window.open(url, '_blank');
    link.setAttribute('download', 'Our Course Plan'); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}