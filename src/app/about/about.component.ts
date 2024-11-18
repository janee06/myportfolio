import { Component } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  ngAfterViewInit(): void {
    // GSAP animations for the about text section
    gsap.from(".aboutText h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2
    });

    gsap.from(".aboutText p", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.4
    });

    gsap.from(".aboutText .hireMe-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6
    });
    gsap.from(".aboutImg img", {
      opacity: 0,
      scale: 0.8,   
      duration: 2,  
      ease: "power4.out", 
      delay: 0.8     
    });
  }
}
