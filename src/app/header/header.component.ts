/* *********************************************************************** */
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navbarfixed: boolean = false;



  @HostListener('window:scroll', ['$event']) onscroll():any {
    if (window.scrollY > 150) {
      this.navbarfixed = true;
    } else {
      this.navbarfixed = false;
    }
  }
}
