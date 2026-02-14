import { Component, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-tax-receipt-actions',
  templateUrl: './tax-receipt-actions.component.html',
  styleUrls: ['./tax-receipt-actions.component.css'],
  standalone: true,
  imports: [MatTooltip],
})
export class TaxReceiptActionsComponent implements OnInit {

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit() {
  }

  public params: any;

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }

  refresh(params: ICellRendererParams): boolean {
    this.params = params;
    return true;
  }

  onDownload() {
    console.log('Share clicked for row:', this.params.data);
    // Add your share logic here
  }

  public onView() {
    const id = this.params.data.id;
    this.router.navigate(['/tax-receipt/view', id]);
  }

  public onEdit() {
    const id = this.params.data.id;
    this.router.navigate(['/tax-receipt/create', id]);
  }

}
