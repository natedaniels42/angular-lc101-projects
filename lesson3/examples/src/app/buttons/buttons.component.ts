import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;
   frustrationInactive: boolean = false;

   constructor() { }

   catch($event?: Event) {
      const random = Math.floor(Math.random() * 200) - 100;

      (event.target as HTMLElement).style.left = `${random}px`;
   }

   ngOnInit() { }

}
