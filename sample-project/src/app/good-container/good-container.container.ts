import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-good-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="good-container">
      good-container works!
    </div>
  `
})
export class GoodContainerContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
