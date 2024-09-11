import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {SideNavigationBarComponent} from "./public/components/side-navigation-bar/side-navigation-bar.component";
import {FooterContentComponent} from "./public/components/footer-content/footer-content.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideNavigationBarComponent, FooterContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'catchup';

  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
}
