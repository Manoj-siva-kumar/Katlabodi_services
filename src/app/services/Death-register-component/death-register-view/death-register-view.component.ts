import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-death-register-view',
  templateUrl: './death-register-view.component.html',
  styleUrls: ['./death-register-view.component.css']
})
export class DeathRegisterViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onEdit(): void {
    // if (!this.data) return;

        this.router.navigate(['/death/create']);

    // console.log(this.data.sNo);
  }

}
