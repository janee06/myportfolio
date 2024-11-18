import { Component } from '@angular/core';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(TextPlugin);
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  ngAfterViewInit(): void {
    // GSAP animation for the "My Projects" heading
    gsap.from(".myprojects h1", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.2
    });

    // GSAP animation for the carousel items
    gsap.from(".carousel-item", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,  
      delay: 0.5  
    });
  }
}
