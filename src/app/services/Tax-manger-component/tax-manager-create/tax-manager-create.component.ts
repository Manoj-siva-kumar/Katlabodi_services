import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROWDATA, ROWDATA_MR } from '../tax-manager-data';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-tax-manager-create',
  templateUrl: './tax-manager-create.component.html',
  styleUrls: ['./tax-manager-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe]
})

export class TaxManagerCreateComponent implements OnInit {

  public isEditMode = false;

  taxForm!: ReturnType<FormBuilder['group']>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly langService: LanguageService,
  ) { }

  public ngOnInit() {

    this.taxForm = this.fb.group({
      sno: [''],
      roadName: [''],
      groupNo: [''],
      propertyNo: [''],
      owner: [''],
      occupantName: [''],
      propertyDescription: [''],

      constructionYear: [''],
      area: [''],
      landArea: [''],
      buildingArea: [''],
      ratePerSqm: [''],
      taxRatePercent: [''],
      usageType: [''],

      capitalValue: [''],
      ratePercent: [''],
      houseTax: [''],
      lightingTax: [''],
      healthTax: [''],
      waterTax: [''],
      totalTax: [''],

      previousBalance: [''],
      currentYearTax: [''],
      additionalTax: [''],
      penaltyInterest: [''],
      grandTotal: [''],

      remarks: [''],
      gramPanchayath: [''],
      village: [''],
      taluka: [''],
      district: [''],
    });

    const sno = this.route.snapshot.paramMap.get('sno');

    if (sno) {
      this.isEditMode = true;

      const lang = this.langService.getLanguage();
      const data = lang === 'mr' ? ROWDATA_MR : ROWDATA;

      // ✅ IMPORTANT FIX — compare as string (works for Marathi numbers also)
      const record = data.find(r => String(r.sno) === String(sno));

      if (record) {
        this.taxForm.patchValue(record);

        this.fromYear = record.fromYear;
        this.toYear = record.toYear;
        this.yearConfirmed = true;
      }
    }

    // ✅ Reload record when language changes
    this.langService.language$.subscribe(() => {
      const snoParam = this.route.snapshot.paramMap.get('sno');
      if (!snoParam) return;

      const lang = this.langService.getLanguage();
      const data = lang === 'mr' ? ROWDATA_MR : ROWDATA;

      const record = data.find(r => String(r.sno) === String(snoParam));

      if (record) {
        this.taxForm.patchValue(record);

        this.fromYear = record.fromYear;
        this.toYear = record.toYear;
        this.yearConfirmed = true;
      }
    });
  }

  public financialYears: string[] = [
    '2021–2022',
    '2022–2023',
    '2023–2024',
    '2024–2025'
  ];

  public fromYear: string = '';
  public toYear: string = '';
  public yearConfirmed: boolean = false;

  public confirmYear() {
    if (this.fromYear && this.toYear) {
      this.yearConfirmed = true;
    }
  }

  public onSave(): void {

    const formValue = this.taxForm.value;

    if (this.isEditMode) {
      this.router.navigate(['/tax/tax-view', formValue.sno]);
    } else {
      console.log('New Record:', formValue);
      this.router.navigate(['/tax/tax-view', formValue.sno]);
    }
  }

}
