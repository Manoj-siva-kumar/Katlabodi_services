import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { rowdata, ROWDATA, ROWDATA_MR } from '../tax-receipt-data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TaxReceiptActionsComponent } from '../tax-receipt-actions/tax-receipt-actions.component';
import { LanguageService } from '../../language-service';

@Component({
  selector: 'app-tax-receipt-grid',
  templateUrl: './tax-receipt-grid.component.html',
  styleUrls: ['./tax-receipt-grid.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule, AgGridAngular, MatTooltip, TranslateModule],
})


export class TaxReceiptGridComponent implements OnInit {


  public rowData: rowdata[] = ROWDATA;
  public columnDefs: ColDef<rowdata>[] = [];
  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

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

  public setRowData(lang: string) {
    this.rowData = lang === 'mr' ? ROWDATA_MR : ROWDATA;
  }

  private buildColumns(): void {

    this.translate.get([
      'taxReceipt.grid.columns.serialNo',
      'taxReceipt.grid.columns.receiptNo',
      'taxReceipt.grid.columns.financialYear',
      'taxReceipt.grid.columns.taxPayerName',
      'taxReceipt.grid.columns.propertyNo',
      'taxReceipt.grid.columns.wardNo',
      'taxReceipt.grid.columns.billNo',
      'taxReceipt.grid.columns.totalTax',
      'taxReceipt.grid.columns.actions'
    ]).subscribe(t => {

      this.columnDefs = [

        {
          field: 'id',
          headerName: t['taxReceipt.grid.columns.serialNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'receiptNo',
          headerName: t['taxReceipt.grid.columns.receiptNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'financialYear',
          headerName: t['taxReceipt.grid.columns.financialYear'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'taxpayerName',
          headerName: t['taxReceipt.grid.columns.taxpayerName'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'propertyNo',
          headerName: t['taxReceipt.grid.columns.propertyNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'wardNo',
          headerName: t['taxReceipt.grid.columns.wardNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'billNo',
          headerName: t['taxReceipt.grid.columns.billNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },
        {
          headerName: t['taxReceipt.grid.columns.totalTax'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['taxReceipt.grid.columns.actions'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80",
          cellRenderer: TaxReceiptActionsComponent,
        }

      ];
    });
  }

  public onCreate(): void {
    this.router.navigate(['/tax-receipt/create']);
  }

}
