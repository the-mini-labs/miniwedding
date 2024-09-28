import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ConfirmComponent],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

}
