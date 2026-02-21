import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROWDATA, ROWDATA_MR } from '../tax-receipt-data';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-tax-receipt-create',
  templateUrl: './tax-receipt-create.component.html',
  styleUrls: ['./tax-receipt-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe]
})
export class TaxReceiptCreateComponent implements OnInit {

  public isEditMode = false;
  taxReceipt!: ReturnType<FormBuilder['group']>;
  public fromYear: string = '';
  public toYear: string = '';
  public yearConfirmed: boolean = false;

  public financialYears: string[] = [
    '2021–2022',
    '2022–2023',
    '2023–2024',
    '2024–2025'
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly langService: LanguageService,
  ) { }

  private createTaxGroup() {
    return this.fb.group({
      previous: [''],
      current: [''],
      total: ['']
    });
  }

  public ngOnInit() {

    this.taxReceipt = this.fb.group({

      id: [''],
      receiptType: [''],
      formNo: [''],
      ruleReference: [''],
      financialYear: [''],

      officeName: [''],
      panchayatSamiti: [''],
      district: [''],
      receiptNo: [''],
      date: [''],

      taxpayerName: [''],
      address: [''],
      wardNo: [''],
      propertyNo: [''],
      plotNo: [''],
      billNo: [''],

      taxDetails: this.fb.group({
        buildingTax: this.createTaxGroup(),
        landTax: this.createTaxGroup(),
        lightingTax: this.createTaxGroup(),
        waterTax: this.createTaxGroup(),
        sanitationTax: this.createTaxGroup(),
        educationTax: this.createTaxGroup(),
        noticeFee: this.createTaxGroup(),
        warrantFee: this.createTaxGroup(),
        other: this.createTaxGroup()
      }),

      grandTotals: this.fb.group({
        previous: [''],
        current: [''],
        total: ['']
      })

    });

    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.isEditMode = true;

    const lang = this.langService.getLanguage();
    const data = lang === 'mr' ? ROWDATA_MR : ROWDATA;

    const record = data.find(r => String(r.id) === String(id));

    if (!record) return;
    this.taxReceipt.reset();
    this.taxReceipt.patchValue(record);
    if (record.date) {
      const isoDate = new Date(record.date).toISOString().split('T')[0];
      this.taxReceipt.get('date')?.setValue(isoDate);
    }
    if (record.financialYear) {
      const years = record.financialYear.split('-');
      this.fromYear = years[0];
      this.toYear = years[1];
      this.yearConfirmed = true;
    }
  }



  public confirmYear() {
    if (this.fromYear && this.toYear) {
      this.yearConfirmed = true;
    }
  }

  public onSave(): void {

    const formValue = this.taxReceipt.value;

    if (this.isEditMode) {
      this.router.navigate(['/tax-receipt/view', formValue.id]);
    } else {
      this.router.navigate(['/tax-receipt/view', formValue.id]);
    }
  }

}
