import { Component, OnInit } from '@angular/core';
import { ROWDATA } from '../birth-register-data';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-birth-register-view',
  templateUrl: './birth-register-view.component.html',
  styleUrls: ['./birth-register-view.component.css']
})
export class BirthRegisterViewComponent implements OnInit {

  public data: any;
  public id: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit(): void {
      const idParam = this.route.snapshot.paramMap.get('id');
  
      if (idParam) {
        const id = +idParam;
        this.data = ROWDATA.find(r => r.id === id);
        this.id = idParam;
      }
    }
  
    public onEdit(): void {
      if (!this.data) return;
      this.router.navigate(['/tax-receipt/create', this.data.id]);
    }

}
