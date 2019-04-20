import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html'
})
export class SuccessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToCutPlanning() { 
    this.router.navigateByUrl('/cut_planning');
  }

  goToProdPlanning() { 
    this.router.navigateByUrl('/production_planning');
  }
}