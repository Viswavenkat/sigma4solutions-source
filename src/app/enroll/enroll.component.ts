import { Component } from '@angular/core';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent {

  scriptURL = "https://script.google.com/macros/s/AKfycbykj5spW6e_xQnzv9jOAI5UepVpEklhAAeyA_8rNu-unSLGrUnu5Yq4AsSDopeMkMIj/exec";

  onSubmit(contactForm: any) {
    // Create a new FormData object and append form values manually
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
        // Handle the response data if needed
        console.log(data);
        // alert('Thank you for submit your details our team will contact you soon!');
        window.location.reload();
      })
      .catch(error => console.error('Error!', error.message));
  }


}
