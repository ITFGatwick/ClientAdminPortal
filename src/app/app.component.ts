import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

  fontSize: number = 18;

  get fontSizePixels(): string {
    return this.fontSize.toString() + "px";
  }
}
