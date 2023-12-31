import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() buttonSize: string = 'default'; // Default size
  @Input() buttonText: string = 'Button Text';
  @Input() styleClass: string = 'button'; // Default style
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

}
