import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROWDATA } from '../death-register-data';

@Component({
  selector: 'app-death-register-create',
  templateUrl: './death-register-create.component.html',
  styleUrls: ['./death-register-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})

export class DeathRegisterCreateComponent implements OnInit {

  public isEditMode = false;
  deathForm!: ReturnType<FormBuilder['group']>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) { }

  private convertToISO(dateStr: string | null): string | null {
    if (!dateStr) return null;

    const parts = dateStr.split('/');
    if (parts.length !== 3) return null;

    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  public ngOnInit() {

    this.deathForm = this.fb.group({

      id: [''],

      // HEADER
      document_type: [''],
      form_number: [''],
      legal_reference: [''],
      aadhaar_number: [''],
      statistical_declaration: [false],
      government_seal_present: [false],
      office_stamp_present: [false],

      // ================= DECEASED DETAILS =================
      deceased_details: this.fb.group({
        date_of_death: [''],
        time_of_death: [''],
        name_of_deceased: [''],

        sex: this.fb.group({
          male: [false],
          female: [false],
          other: [false]
        }),

        age_at_death: this.fb.group({
          years: [''],
          months: [''],
          days: ['']
        }),

        marital_status: [''],
        spouse_name: ['']
      }),

      // ================= RESIDENCE =================
      residence_details: this.fb.group({
        house_number: [''],
        street_area: [''],
        village_town: [''],
        taluka: [''],
        district: [''],
        state: ['']
      }),

      // ================= PLACE OF DEATH =================
      place_of_death_details: this.fb.group({
        place_type: this.fb.group({
          hospital: [false],
          home: [false],
          other: [false]
        }),
        hospital_name: [''],
        address_of_place: ['']
      }),

      // ================= SOCIAL =================
      social_details: this.fb.group({
        religion: this.fb.group({
          hindu: [false],
          muslim: [false],
          christian: [false],
          other: [false]
        }),
        occupation: ['']
      }),

      // ================= MEDICAL =================
      medical_details: this.fb.group({
        medical_attention_received: [false],

        type_of_medical_institution: this.fb.group({
          government: [false],
          private: [false],
          none: [false]
        }),

        doctor_name: [''],

        cause_of_death: this.fb.group({
          primary_cause: [''],
          secondary_cause: ['']
        }),

        duration_of_illness: ['']
      }),

      // ================= STATISTICAL =================
      statistical_information: this.fb.group({
        medically_certified: [false],
        post_mortem_conducted: [false],
        female_pregnant_at_time_of_death: [null],

        tobacco_consumption: this.fb.group({
          yes: [false],
          no: [false],
          duration_years: ['']
        }),

        alcohol_consumption: this.fb.group({
          yes: [false],
          no: [false],
          duration_years: ['']
        }),

        betel_pan_consumption: this.fb.group({
          yes: [false],
          no: [false],
          duration_years: ['']
        })
      }),

      // ================= INFORMANT =================
      informant_details: this.fb.group({
        name: [''],
        relationship_to_deceased: [''],
        address: [''],
        signature_present: [false]
      }),

      // ================= REGISTRATION =================
      registration_details: this.fb.group({
        registration_number: [''],
        registration_date: [''],
        registration_year: [''],
        registration_unit_code: [''],
        local_body_name: [''],
        registrar_name: [''],
        registrar_signature_present: [false],
        official_seal_present: [false]
      }),

      // ================= REGISTRATION LOCATION =================
      registration_location_details: this.fb.group({
        district: [''],
        taluka: [''],
        village: [''],
        registration_office_name: ['']
      })

    });


    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.isEditMode = true;

    const record = ROWDATA.find(r => r.id === +id);

    if (!record) return;

    this.deathForm.reset();

    const patchedRecord = {
      ...record,
      deceased_details: {
        ...record.deceased_details,
        date_of_death: this.convertToISO(
          record.deceased_details?.date_of_death
        )
      },
      registration_details: {
        ...record.registration_details,
        registration_date: this.convertToISO(
          record.registration_details?.registration_date
        )
      }
    };

    this.deathForm.patchValue(patchedRecord);
  }


  public onSave(): void {

    const formValue = this.deathForm.value;

    if (this.isEditMode) {
      this.router.navigate(['/death/view', formValue.id]);
    } else {
      this.router.navigate(['/death/view', formValue.id]);
    }
  }

}
