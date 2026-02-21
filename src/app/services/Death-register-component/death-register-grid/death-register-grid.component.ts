import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DeathRegistrationForm, ROWDATA, ROWDATA_MR } from '../death-register-data';
import { DeaathRegisterActionsComponent } from '../deaath-register-actions/deaath-register-actions.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-death-register-grid',
  templateUrl: './death-register-grid.component.html',
  styleUrls: ['./death-register-grid.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular, MatTooltip, TranslateModule],
})

export class DeathRegisterGridComponent implements OnInit {

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
  

  public rowData: DeathRegistrationForm[] = ROWDATA;
  public columnDefs: ColDef<DeathRegistrationForm>[] = [];
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public setRowData(lang: string) {
    this.rowData = lang === 'mr' ? ROWDATA_MR : ROWDATA;
  }


  buildColumns() {

    this.translate.get([
      'deathRegister.grid.columns.sno',
      'deathRegister.grid.columns.registrationNo',
      'deathRegister.grid.columns.registrationDate',
      'deathRegister.grid.columns.deceasedName',
      'deathRegister.grid.columns.dateOfDeath',
      'deathRegister.grid.columns.gender',
      'deathRegister.grid.columns.ageYears',
      'deathRegister.grid.columns.village',
      'deathRegister.grid.columns.localBody',
      'deathRegister.grid.columns.actions'
    ])
      .subscribe(t => {

        this.columnDefs = [

          {
            field: 'id',
            headerName: t['deathRegister.grid.columns.sno'],
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
            flex: 0.7
          },

          {
            headerName: t['deathRegister.grid.columns.registrationNo'],
            valueGetter: params =>
              params.data?.registration_details?.registration_number,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.registrationDate'],
            valueGetter: params =>
              params.data?.registration_details?.registration_date,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.deceasedName'],
            valueGetter: params =>
              params.data?.deceased_details?.name_of_deceased,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.dateOfDeath'],
            valueGetter: params =>
              params.data?.deceased_details?.date_of_death,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.gender'],
            valueGetter: params => {
              const gender = params.data?.deceased_details?.sex;
              if (!gender) return '';
              if (gender.male) return 'Male';
              if (gender.female) return 'Female';
              if (gender.other) return 'Other';
              return '';
            },
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.ageYears'],
            valueGetter: params =>
              params.data?.deceased_details?.age_at_death?.years,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.village'],
            valueGetter: params =>
              params.data?.residence_details?.village_town,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.localBody'],
            valueGetter: params =>
              params.data?.registration_details?.local_body_name,
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellClass: "font-[poppins]",
          },

          {
            headerName: t['deathRegister.grid.columns.actions'],
            headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80",
            cellRenderer: DeaathRegisterActionsComponent,
          }

        ];

      });

  }

  public onCreate(): void {
    this.router.navigate(['/death/create']);
  }
}
