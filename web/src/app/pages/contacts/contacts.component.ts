import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { SeparatorComponent } from '../../components/separator/separator.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,SeparatorComponent, ConfirmComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
