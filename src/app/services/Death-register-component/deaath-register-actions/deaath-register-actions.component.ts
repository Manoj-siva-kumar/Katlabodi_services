import { Component, OnInit } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-deaath-register-actions',
  templateUrl: './deaath-register-actions.component.html',
  styleUrls: ['./deaath-register-actions.component.css'],
  standalone: true,
  imports: [MatTooltip],
})
export class DeaathRegisterActionsComponent implements OnInit {

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
    // Add your share logic here
  }

  public onView() {
    const id = this.params.data.id;
    this.router.navigate(['/death/view', id]);
  }

  public onEdit() {
    const id = this.params.data.id;
    this.router.navigate(['/death/create', id]);
  }

}
