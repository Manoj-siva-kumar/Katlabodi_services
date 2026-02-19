import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../services/language-service';

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

  constructor(
    private readonly translate: TranslateService,
    private readonly langService: LanguageService,
  ) { }

  ngOnInit() {
    this.currentLanguage = this.langService.getLanguage();
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
    this.langService.setLanguage(lang);
    this.toggle = false;
  }

}

