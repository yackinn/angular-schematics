import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { AppRoutingModule }       from './app-routing.module';
import { AppComponent }           from './app.component';
import { GoodContainerContainer } from './good-container/good-container.container';
import { YesTestPresenter } from './yes-test/yes-test.presenter';

@NgModule({
  declarations: [
    AppComponent,
    GoodContainerContainer,
    YesTestPresenter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
