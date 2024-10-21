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

  goToForm(){
    window.open('https://forms.gle/3K4UqvPwsqe7cCGJ6', '_blank');
  }
}
