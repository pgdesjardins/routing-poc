import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public oppList: object[];
  public selectedId: string | undefined;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      console.log(params);
      this.selectedId = params.get('id');
    });
    this.oppList = [
      { id: '123', title: '123 title', body: '123 body' },
      { id: '456', title: '456 title', body: '456 body' },
      { id: '789', title: '789 title', body: '789 body' }
    ];
  }

  ngOnInit() {
    console.log('ClientsComponent onInit');
  }
}
