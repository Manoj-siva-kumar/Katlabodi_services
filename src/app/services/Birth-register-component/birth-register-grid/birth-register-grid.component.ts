import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { BirthRegistrationForm, ROWDATA } from '../birth-register-data';
import { BirthRegisterActionsComponent } from '../birth-register-actions/birth-register-actions.component';

@Component({
  selector: 'app-birth-register-grid',
  templateUrl: './birth-register-grid.component.html',
  styleUrls: ['./birth-register-grid.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular, MatTooltip],
})
export class BirthRegisterGridComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public rowData: BirthRegistrationForm[] = ROWDATA;
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public columnDefs: ColDef<BirthRegistrationForm>[] = [

    {
      field: 'id',
      flex: 0.7,
      headerName: 'S.No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Registration No',
      valueGetter: params =>
        params.data?.registration_details_office_use?.registration_number,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Registration Date',
      valueGetter: params =>
        params.data?.registration_details_office_use?.registration_date,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Child Name',
      valueGetter: params =>
        params.data?.birth_event_details?.name_of_child,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Date of Birth',
      valueGetter: params =>
        params.data?.birth_event_details?.date_of_birth,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Gender',
      valueGetter: params => {
        const gender = params.data?.birth_event_details?.sex_of_child;
        if (!gender) return '';
        if (gender.male) return 'Male';
        if (gender.female) return 'Female';
        if (gender.other) return 'Other';
        return '';
      },
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Mother Name',
      valueGetter: params =>
        params.data?.mother_details?.name,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Father Name',
      valueGetter: params =>
        params.data?.father_details?.name,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Village',
      valueGetter: params =>
        params.data?.birth_event_details?.place_of_birth_address?.village,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },

    {
      headerName: 'Local Body',
      valueGetter: params =>
        params.data?.registration_details_office_use?.local_body_name,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      headerName: 'Actions',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      cellRenderer: BirthRegisterActionsComponent,
    },

  ];


  public onCreate(): void {
    this.router.navigate(['/birth/create']);
  }
}
