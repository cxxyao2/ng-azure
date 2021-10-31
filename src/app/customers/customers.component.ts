import { Component, OnInit, Optional, Self, SkipSelf } from '@angular/core';
import { HeroService } from '../hero.service';
const xxx = { heroName: 'xiaohong' };

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers: [],
})
export class CustomersComponent implements OnInit {
  myName = '';

  constructor(@Self() @Optional() private heroSrv: HeroService) {}

  ngOnInit(): void {
    this.myName = this.heroSrv.heroName;
  }
}
