import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { rowdata, ROWDATA } from '../tax-receipt-data';
import { TaxReceiptActionsComponent } from '../tax-receipt-actions/tax-receipt-actions.component';

@Component({
  selector: 'app-tax-receipt-grid',
  templateUrl: './tax-receipt-grid.component.html',
  styleUrls: ['./tax-receipt-grid.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular, MatTooltip],
})


export class TaxReceiptGridComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public rowData: rowdata[] = ROWDATA;
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  public columnDefs: ColDef<rowdata>[] = [
    {
      field: 'id',
      headerName: 'S.No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'formNo',
      headerName: 'Group No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",

    },
    {
      field: 'financialYear',
      headerName: 'Property No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'taxpayerName',
      headerName: 'Owner',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'wardNo',
      headerName: 'Usage Type',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'wardNo',
      headerName: 'Capital Value',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      field: 'receiptType',
      headerName: 'Total Tax',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
    },
    {
      headerName: 'Actions',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80",
      cellRenderer: TaxReceiptActionsComponent,
    },
  ];

  public onCreate(): void{
    this.router.navigate(['/tax-receipt/create']);
  }

}
