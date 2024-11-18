import { Component } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngAfterViewInit(): void {
    // GSAP animations for the text
    gsap.from(".text p", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2
    });

    gsap.from(".text h2", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4
    });

    gsap.from(".text .buttons-container", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.6
    });
    gsap.from(".image img", {
      opacity: 0,
      scale: 0.8,   
      duration: 2,  
      ease: "power4.out", 
      delay: 0.8    
    });
  }
}
