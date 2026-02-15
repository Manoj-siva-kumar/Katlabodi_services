import { Component, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-birth-register-actions',
  templateUrl: './birth-register-actions.component.html',
  styleUrls: ['./birth-register-actions.component.css'],
  standalone: true,
  imports: [MatTooltip],
})

export class BirthRegisterActionsComponent implements OnInit {

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

  public onDownload() {
    console.log('Share clicked for row:', this.params.data);
  }

  public onView() {
    const id = this.params.data.id;
    this.router.navigate(['/birth/view', id]);
  }

  public onEdit() {
    const id = this.params.data.id;
    this.router.navigate(['/birth/create', id]);
  }

}
