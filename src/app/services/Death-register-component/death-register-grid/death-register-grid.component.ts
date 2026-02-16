import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { DeathRegistrationForm, ROWDATA } from '../death-register-data';
import { DeaathRegisterActionsComponent } from '../deaath-register-actions/deaath-register-actions.component';

@Component({
  selector: 'app-death-register-grid',
  templateUrl: './death-register-grid.component.html',
  styleUrls: ['./death-register-grid.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular, MatTooltip],
})

export class DeathRegisterGridComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public rowData: DeathRegistrationForm[] = ROWDATA;
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public columnDefs: ColDef<DeathRegistrationForm>[] = [

    {
      field: 'id',
      flex: 0.7,
      headerName: 'S.No',
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Registration No',
      valueGetter: params =>
        params.data?.registration_details?.registration_number,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Registration Date',
      valueGetter: params =>
        params.data?.registration_details?.registration_date,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Deceased Name',
      valueGetter: params =>
        params.data?.deceased_details?.name_of_deceased,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Date of Death',
      valueGetter: params =>
        params.data?.deceased_details?.date_of_death,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Gender',
      valueGetter: params => {
        const gender = params.data?.deceased_details?.sex;
        if (!gender) return '';
        if (gender.male) return 'Male';
        if (gender.female) return 'Female';
        if (gender.other) return 'Other';
        return '';
      },
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Age (Years)',
      valueGetter: params =>
        params.data?.deceased_details?.age_at_death?.years,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Village',
      valueGetter: params =>
        params.data?.residence_details?.village_town,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Local Body',
      valueGetter: params =>
        params.data?.registration_details?.local_body_name,
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Actions',
      headerClass: "font-sans font-semibold text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      cellRenderer: DeaathRegisterActionsComponent,
    }

  ];

  public onCreate(): void {
    this.router.navigate(['/death/create']);
  }
}
