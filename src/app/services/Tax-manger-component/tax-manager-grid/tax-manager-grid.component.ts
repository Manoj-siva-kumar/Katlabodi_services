import { Component, OnDestroy, OnInit } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { ColDef, GridApi } from 'ag-grid-community';
import { TaxActionsComponentComponent } from '../tax-actions-component/tax-actions-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { PropertyRow, ROWDATA } from '../tax-manager-data';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tax-manager-grid',
  templateUrl: './tax-manager-grid.component.html',
  styleUrls: ['./tax-manager-grid.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    AgGridAngular,
    MatDialogModule,
    MatTooltip,
    TranslateModule
  ],
})
export class TaxManagerGridComponent implements OnInit {

  public rowData: PropertyRow[] = ROWDATA;
  public columnDefs: ColDef<PropertyRow>[] = [];

  constructor(
    private readonly router: Router,
    private readonly translate: TranslateService,
  ) {
  }

  ngOnInit(): void {
    this.buildColumns();

    this.translate.onLangChange.subscribe(() => {
      this.buildColumns();
    });
  }


  public defaultColDef: ColDef = {
    flex: 1,
    sortable: true,
    resizable: true,
    filter: true,
  };

  private buildColumns(): void {

    this.translate.get([
      'propertyTax.grid.columns.sno',
      'propertyTax.grid.columns.groupNo',
      'propertyTax.grid.columns.propertyNo',
      'propertyTax.grid.columns.owner',
      'propertyTax.grid.columns.usageType',
      'propertyTax.grid.columns.capitalValue',
      'propertyTax.grid.columns.totalTax',
      'propertyTax.grid.columns.actions'
    ]).subscribe(t => {

      this.columnDefs = [

        {
          field: 'sno',
          headerName: t['propertyTax.grid.columns.sno'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'groupNo',
          headerName: t['propertyTax.grid.columns.groupNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'propertyNo',
          headerName: t['propertyTax.grid.columns.propertyNo'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'owner',
          headerName: t['propertyTax.grid.columns.owner'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'usageType',
          headerName: t['propertyTax.grid.columns.usageType'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'capitalValue',
          headerName: t['propertyTax.grid.columns.capitalValue'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          field: 'totalTax',
          headerName: t['propertyTax.grid.columns.totalTax'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80 hover:opacity-90",
          cellClass: "font-[poppins]",
        },

        {
          headerName: t['propertyTax.grid.columns.actions'],
          headerClass: "font-sans font-semibold text-gray-700 text-base !bg-blue-900 !text-white opacity-80",
          cellRenderer: TaxActionsComponentComponent,
        }

      ];
    });
  }

  public onCreate(): void {
    this.router.navigate(['/tax/tax-create']);
  }
}
