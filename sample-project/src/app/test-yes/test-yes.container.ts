import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-test-yes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="test-yes">
      test-yes works!
    </div>
  `
})
export class TestYesContainer implements OnInit {

  constructor() { }

  ngOnInit(): void {}

}
