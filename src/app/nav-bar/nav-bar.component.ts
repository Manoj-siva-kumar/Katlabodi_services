import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface ServiceItem {
  id: string;
  serviceName: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public selectedItem: string = '';
  selectedService: string = 'birth';
  isMenuOpen: boolean = false;

  openMenu() {
    this.isMenuOpen = true;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  @Output() serviceSelected = new EventEmitter<string>()

  public selectService(service: string) {
    this.selectedService = service;
    this.selectedItem = 'services';
    this.isMenuOpen = false;
    this.serviceSelected.emit(service)
  }

  public items: ServiceItem[] = [
    { id: 'birth', serviceName: 'Birth Register' },
    { id: 'tax', serviceName: 'Tax Register' },
    { id: 'tax-receipt', serviceName: 'Tax Receipt' },
    { id: 'death', serviceName: 'Death Register' },
    { id: 'reg', serviceName: 'Register' },
    { id: 'marriage', serviceName: 'Marriage Register' },
  ];

}

