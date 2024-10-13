import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmComponent } from './components/confirm/confirm.component';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ConfirmComponent],
  styleUrls: [
    "./app.component.css",
  ],
})
export class AppComponent {
}