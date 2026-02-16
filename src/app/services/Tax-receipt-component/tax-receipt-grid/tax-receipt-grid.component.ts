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
      width: 90
    },

    {
      field: 'receiptNo',
      headerName: 'Receipt No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      width: 140
    },

    {
      field: 'financialYear',
      headerName: 'Financial Year',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      width: 150
    },

    {
      field: 'taxpayerName',
      headerName: 'Owner',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      flex: 1
    },

    {
      field: 'propertyNo',
      headerName: 'Property No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      width: 140
    },

    {
      field: 'wardNo',
      headerName: 'Ward No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      width: 120
    },

    {
      field: 'billNo',
      headerName: 'Bill No',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      width: 130
    },

    {
      headerName: 'Total Tax',
      valueGetter: params => params.data?.grandTotals?.total ?? 0,
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellClass: "font-[poppins]",
      width: 140,
      valueFormatter: params => `₹ ${params.value}`
    },

    {
      headerName: 'Actions',
      headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
      cellRenderer: TaxReceiptActionsComponent,
      width: 150
    }

  ];


  public onCreate(): void {
    this.router.navigate(['/tax-receipt/create']);
  }

}
