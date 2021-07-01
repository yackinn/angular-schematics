import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-yes-test',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./yes-test.presenter.scss'],
  template: `
    <div class="yes-test">
      yes-test works!
    </div>
  `,
})
export class YesTestPresenter {
}
