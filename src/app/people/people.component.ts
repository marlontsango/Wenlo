import { Component, ViewChild } from '@angular/core';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-people',
  standalone: false,
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  @ViewChild('op') op!: Popover;

  isAddAccountOpen: boolean = false;
  isDetailOpen: boolean = false;

  constructor() {}

  oPenAddAccountDialog() {
    this.isAddAccountOpen = true;
  }
  openDetail(event: any) {
    this.op.show(event);
  }
  hidePopover() {
    this.op.hide();
  }
}
