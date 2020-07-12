import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class InfoComponent {
  openGithub() {
    window.open("https://github.com/Brandeso/MaximoClique", "_blank");
  }
}
