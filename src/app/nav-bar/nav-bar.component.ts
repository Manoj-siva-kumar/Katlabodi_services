import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

interface ServiceItem {
  id: string;
  serviceNameKey: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  imports: [CommonModule, TranslateModule],
})
export class NavBarComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    const saved = localStorage.getItem('lang') || 'en';
    this.currentLanguage = saved;
    this.translate.use(saved);
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
    { id: 'birth', serviceNameKey: 'services.birth' },
    { id: 'tax', serviceNameKey: 'services.tax' },
    { id: 'tax-receipt', serviceNameKey: 'services.taxReceipt' },
    { id: 'death', serviceNameKey: 'services.death' },
    { id: 'reg', serviceNameKey: 'services.register' },
    { id: 'marriage', serviceNameKey: 'services.marriage' },
  ];

  currentLanguage = 'en';
  toggle = false;

  availableLanguages = [
    { code: 'en', label: 'English' },
    { code: 'mr', label: 'Marathi' }
  ];

  onOpen() {
    this.toggle = !this.toggle;
  }

  onSelect(lang: string) {
    this.currentLanguage = lang;
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.toggle = false;
  }

}

