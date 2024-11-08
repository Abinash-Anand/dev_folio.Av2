import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [HeaderComponent]
})
export class AppComponent  {
  title = 'dev_folio.Av2';
  scrollIsTrue: boolean = true;

}
