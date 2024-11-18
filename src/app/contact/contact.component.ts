import { Component } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  ngAfterViewInit(): void {
    
    gsap.from(".footer-logo", {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.2
    });

    
    gsap.from(".footer-links li", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.4
    });

    
    gsap.from(".footer-button ", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.6
    });

   
    gsap.from(".social-icon", {
      opacity: 0,
      scale: 0.5,
      duration: 1,
      stagger: 0.3,
      delay: 0.8
    });

    
    gsap.from(".footer-copyright", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 1.0
    });
  }
}
