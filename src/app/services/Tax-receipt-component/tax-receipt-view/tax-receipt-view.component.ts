import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ROWDATA } from '../tax-receipt-data';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-tax-receipt-view',
  templateUrl: './tax-receipt-view.component.html',
  styleUrls: ['./tax-receipt-view.component.css'],
  standalone: true,
  imports: [MatTooltip],
})
export class TaxReceiptViewComponent implements OnInit {

  public data: any;
  public id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    if (idParam) {
      const id = +idParam;
      this.data = ROWDATA.find(r => r.id === id);
      this.id = idParam;
    }
  }

  public onEdit(): void {
    if (!this.data) return;
    this.router.navigate(['/birth/create', this.data.id]);
  }
}
