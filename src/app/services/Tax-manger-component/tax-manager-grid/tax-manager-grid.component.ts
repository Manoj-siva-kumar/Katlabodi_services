import { Component, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { ColDef } from 'ag-grid-community';
import { TaxActionsComponentComponent } from '../tax-actions-component/tax-actions-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { Router, RouterOutlet } from '@angular/router';
import { PropertyRow, ROWDATA } from '../tax-manager-data';


@Component({
  selector: 'app-tax-manager-grid',
  templateUrl: './tax-manager-grid.component.html',
  styleUrls: ['./tax-manager-grid.component.css'],
  standalone: true,
  imports: [CommonModule, AgGridAngular, MatDialogModule, MatTooltip],
})
export class TaxManagerGridComponent implements OnInit {

  public rowData: PropertyRow[] = ROWDATA

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public columnDefs: ColDef<PropertyRow>[] = [
    {
      field: 'sno',
      headerName: 'S.No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'groupNo',
      headerName: 'Group No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",

    },
    {
      field: 'propertyNo',
      headerName: 'Property No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'owner',
      headerName: 'Owner',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'usageType',
      headerName: 'Usage Type',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'capitalValue',
      headerName: 'Capital Value',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'totalTax',
      headerName: 'Total Tax',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      headerName: 'Actions',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80",
      cellRenderer: TaxActionsComponentComponent,
    },
  ];

  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public onCreate(): void{
    this.router.navigate([`/tax/tax-create`]);
  }

}
