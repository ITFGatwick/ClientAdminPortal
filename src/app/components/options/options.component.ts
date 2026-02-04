import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-options',
    templateUrl: './options.component.html',
    styleUrls: ['./options.component.css'],
    standalone: false
})
export class OptionsComponent {

  @Input() fontSize: number = 18;
  @Output() fontSizeChange = new EventEmitter<number>();

  onDecreaseFontSizeClick() {
    const newFontSize = this.fontSize - 1;
    this.fontSizeChange.emit(newFontSize);
  }

  onIncreaseFontSizeClick() {
    const newFontSize = this.fontSize + 1;
    this.fontSizeChange.emit(newFontSize);
  }
}
