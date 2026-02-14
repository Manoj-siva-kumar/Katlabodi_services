import { Component, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-tax-actions-component',
  templateUrl: './tax-actions-component.component.html',
  styleUrls: ['./tax-actions-component.component.css'],
  standalone: true,
  imports: [MatTooltip],
})
export class TaxActionsComponentComponent implements OnInit {

  constructor(
    private readonly router: Router
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

  onView() {
    const sno = this.params.data.sno;
    this.router.navigate(['/tax/tax-view', sno]);
  }

  public onEdit() {
    const sno = this.params.data.sno;
    this.router.navigate(['/tax/tax-create', sno]);
  }

}
