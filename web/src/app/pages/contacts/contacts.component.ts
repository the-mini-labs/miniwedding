import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ConfirmComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
