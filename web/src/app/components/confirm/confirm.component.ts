import { Component } from '@angular/core';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [SeparatorComponent],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {

}
