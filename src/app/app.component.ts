import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 's4s';
  color="#f5ad42";
  contactFormDirective: any;

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top with smooth animation
  }


// onSubmit(){
//   console.log(this.contactForm.value)
//   this.contactForm.reset()
// }

// contactForm = new FormGroup({

// firstName: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.pattern("^[a-zA-Z]+$")]), 
// email: new FormControl({
//   value: '',
//   disabled:false},[Validators.required,Validators.maxLength(20),Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]
// ),
// phone: new FormControl('',[Validators.required])
// })

// ngOnInit(): void {
  
// }

// }

scriptURL = "https://script.google.com/macros/s/AKfycbw-Sd14SsWZBL5lPxrhobx-xpm9MH0_GLIxcHylZ5kb28TWqPC129c2P7S7eqf-FLr7kQ/exec";

  onSubmit(contactForm: any) {
    // Create a new FormData object and append form values manually
    const formData = new FormData();
    formData.append('Name', contactForm.Name);
    formData.append('Number', contactForm.Number);
    formData.append('Email', contactForm.Email);
    formData.append('Message',contactForm.Message)

    fetch(this.scriptURL, { method: 'POST', body: formData })
      .then(response => response.json())
      .then(data => {
        // Handle the response data if needed
        console.log(data);
        alert('Thank you');
        window.location.reload();
      })
      .catch(error => console.error('Error!', error.message));
  }
}

