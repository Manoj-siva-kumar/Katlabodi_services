import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ROWDATA } from '../birth-register-data';
import { TranslatePipe } from '@ngx-translate/core';


@Component({
  selector: 'app-birth-register-create',
  templateUrl: './birth-register-create.component.html',
  styleUrls: ['./birth-register-create.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TranslatePipe]
})
export class BirthRegisterCreateComponent implements OnInit {

  public isEditMode = false;
  birthForm!: ReturnType<FormBuilder['group']>;

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

    this.birthForm = this.fb.group({

      id: [''],
      document_type: [''],
      form_number: [''],
      legal_reference: [''],

      birth_event_details: this.fb.group({
        date_of_birth: [''],
        time_of_birth: [''],
        name_of_child: [''],
        hospital_name: [''],

        sex_of_child: this.fb.group({
          male: [false],
          female: [false],
          other: [false]
        }),

        place_of_birth_type: this.fb.group({
          hospital: [false],
          home: [false],
          other: [false]
        }),

        place_of_birth_address: this.fb.group({
          house_number: [''],
          street_area: [''],
          village: [''],
          taluka: [''],
          district: [''],
          state: [''],
          pin_code: ['']
        })
      }),

      birth_type_information: this.fb.group({
        birth_type: this.fb.group({
          single: [false],
          twin: [false],
          triplet: [false],
          multiple: [false]
        }),
        birth_order: ['']
      }),

      mother_details: this.fb.group({
        name: [''],
        age_at_birth: [''],
        education: [''],
        occupation: ['']
      }),

      father_details: this.fb.group({
        name: [''],
        age: [''],
        education: [''],
        occupation: ['']
      }),

      permanent_address_of_parents: this.fb.group({
        house_number: [''],
        street_area: [''],
        village: [''],
        taluka: [''],
        district: [''],
        state: [''],
        pin_code: ['']
      }),

      delivery_information: this.fb.group({
        delivery_type: this.fb.group({
          institutional: [false],
          home: [false],
          other: [false]
        })
      }),

      informant_details: this.fb.group({
        name: [''],
        relationship_to_child: [''],
        address: [''],
        signature_present: [false]
      }),

      registration_details_office_use: this.fb.group({
        registration_number: [''],
        registration_date: [''],
        registration_year: [''],
        registration_unit_code: [''],
        local_body_name: [''],
        registrar_name: [''],
        registrar_signature_present: [false],
        official_seal_present: [false]
      }),

      additional_visible_elements: this.fb.group({
        checkboxes_present: [false],
        serial_numbered_questions: [false],
        signature_lines_present: [false],
        official_stamp_visible: [false],
        handwritten_entries_present: [false]
      })

    });


    const id = this.route.snapshot.paramMap.get('id');

    if (!id) return;

    this.isEditMode = true;

    const record = ROWDATA.find(r => r.id === +id);

    console.log('Editing record:', record);

    if (!record) return;

    this.birthForm.reset();

    const patchedRecord = {
      ...record,
      birth_event_details: {
        ...record.birth_event_details,
        date_of_birth: this.convertToISO(
          record.birth_event_details?.date_of_birth
        )
      },
      registration_details_office_use: {
        ...record.registration_details_office_use,
        registration_date: this.convertToISO(
          record.registration_details_office_use?.registration_date
        )
      }
    };

    this.birthForm.patchValue(patchedRecord);


  }


  public onSave(): void {

    const formValue = this.birthForm.value;

    if (this.isEditMode) {
      this.router.navigate(['/birth/view', formValue.id]);
    } else {
      this.router.navigate(['/birth/view', formValue.id]);
    }
  }


}
