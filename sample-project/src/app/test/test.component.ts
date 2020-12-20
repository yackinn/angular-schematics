import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="test">
      test works!
    </div>
  `
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
