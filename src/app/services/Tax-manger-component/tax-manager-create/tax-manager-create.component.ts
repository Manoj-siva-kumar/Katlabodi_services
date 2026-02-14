import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROWDATA } from '../tax-manager-data';

@Component({
  selector: 'app-tax-manager-create',
  templateUrl: './tax-manager-create.component.html',
  styleUrls: ['./tax-manager-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class TaxManagerCreateComponent implements OnInit {

  public isEditMode = false;


  taxForm!: ReturnType<FormBuilder['group']>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }

  ngOnInit() {

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

      const record = ROWDATA.find(r => r.sno === +sno);

      if (record) {
        this.taxForm.patchValue(record);

        // also set year display values
        this.fromYear = record.fromYear;
        this.toYear = record.toYear;
        this.yearConfirmed = true;
      }
    }


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

      // Navigate back to view page after editing
      this.router.navigate(['/tax/tax-view', formValue.sno]);

    } else {

      // Create mode logic
      console.log('New Record:', formValue);

      // You can push to ROWDATA here if needed

      this.router.navigate(['/tax/tax-view', formValue.sno]);
    }
  }


}
