import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterModule, NavBarComponent, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  //constructor
  constructor(
    private readonly router: Router,
  ){}

  public selectedService(service: string){
    this.router.navigate([`/${service}`]);
  }

}
