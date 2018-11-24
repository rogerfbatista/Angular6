import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'meu-table',
  templateUrl: './meu-table.component.html',
  styleUrls: ['./meu-table.component.css']
})
export class MeuTableComponent implements OnInit {

  constructor() {

    console.log("meucomponte")
   }

  ngOnInit() {
    console.log("meucomponte")
  }

}
