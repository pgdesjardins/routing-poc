import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-opportunity-list',
  templateUrl: './opportunity-list.component.html',
  styleUrls: ['./opportunity-list.component.scss']
})
export class OpportunityListComponent implements OnInit {
  @Input() opportunities: any;
  @Input() selectedId: string;
  constructor() {}

  ngOnInit() {}
}
