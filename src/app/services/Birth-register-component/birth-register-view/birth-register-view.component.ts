import { Component, OnInit } from '@angular/core';
import { ROWDATA } from '../birth-register-data';
import { ActivatedRoute, Router } from '@angular/router';
import { MatTooltip } from '@angular/material/tooltip';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-birth-register-view',
  templateUrl: './birth-register-view.component.html',
  styleUrls: ['./birth-register-view.component.css'],
  standalone: true,
  imports: [CommonModule, MatTooltip, TranslatePipe]
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
    this.router.navigate(['/birth/create', this.data.id]);
  }

}
