import { Component, OnInit } from '@angular/core';
import { ROWDATA } from '../tax-manager-data';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'app-tax-manager-view',
  templateUrl: './tax-manager-view.component.html',
  styleUrls: ['./tax-manager-view.component.css'],
  standalone: true,
  imports: [MatTooltip],
})

export class TaxManagerViewComponent implements OnInit {

  public data: any;
  public sNo: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const snoParam = this.route.snapshot.paramMap.get('sno');

    if (snoParam) {
      const sno = +snoParam;
      this.data = ROWDATA.find(r => r.sno === sno);
      this.sNo = snoParam;
    }
  }

  onEdit(): void {
    if (!this.data) return;

    this.router.navigate(['/tax/tax-create', this.data.sno]);
    console.log(this.data.sNo);
  }

}
