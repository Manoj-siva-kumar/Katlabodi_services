import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { BirthRegistrationForm, ROWDATA, ROWDATA_MR } from '../birth-register-data';
import { BirthRegisterActionsComponent } from '../birth-register-actions/birth-register-actions.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../language-service';


@Component({
  selector: 'app-birth-register-grid',
  templateUrl: './birth-register-grid.component.html',
  styleUrls: ['./birth-register-grid.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular, MatTooltip, TranslateModule],
})
export class BirthRegisterGridComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly translate: TranslateService,
    private readonly langService: LanguageService,
  ) { }

  public ngOnInit() {

    this.buildColumns();

    this.setRowData(this.langService.getLanguage());

    this.langService.language$.subscribe(lang => {
      this.setRowData(lang);
      this.buildColumns();
    });

  }


  public columnDefs: ColDef<BirthRegistrationForm>[] = [];
  public rowData: BirthRegistrationForm[] = [];
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public setRowData(lang: string) {
    this.rowData = lang === 'mr' ? ROWDATA_MR : ROWDATA;
  }

  private buildColumns() {

    this.translate.get([
      'birthRegister.columns.serial',
      'birthRegister.columns.registrationNo',
      'birthRegister.columns.registrationDate',
      'birthRegister.columns.childName',
      'birthRegister.columns.dob',
      'birthRegister.columns.gender',
      'birthRegister.columns.motherName',
      'birthRegister.columns.fatherName',
      'birthRegister.columns.village',
      'birthRegister.columns.localBody',
      'birthRegister.columns.actions'
    ]).subscribe(t => {

      this.columnDefs = [

        {
          field: 'id',
          flex: 0.7,
          headerName: t['birthRegister.columns.serial'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.registrationNo'],
          valueGetter: params =>
            params.data?.registration_details_office_use?.registration_number,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.registrationDate'],
          valueGetter: params =>
            params.data?.registration_details_office_use?.registration_date,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.childName'],
          valueGetter: params =>
            params.data?.birth_event_details?.name_of_child,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.dob'],
          valueGetter: params =>
            params.data?.birth_event_details?.date_of_birth,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },
        {
          headerName: t['birthRegister.columns.gender'],
          valueGetter: params =>
            params.data?.birth_event_details?.gender_label || '',
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },
        {
          headerName: t['birthRegister.columns.motherName'],
          valueGetter: params => params.data?.mother_details?.name,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.fatherName'],
          valueGetter: params => params.data?.father_details?.name,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.village'],
          valueGetter: params =>
            params.data?.birth_event_details?.place_of_birth_address?.village,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.localBody'],
          valueGetter: params =>
            params.data?.registration_details_office_use?.local_body_name,
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['birthRegister.columns.actions'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
          cellRenderer: BirthRegisterActionsComponent,
        }

      ];

    });

  }




  public onCreate(): void {
    this.router.navigate(['/birth/create']);
  }
}
