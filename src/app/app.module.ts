import {NgDompurifySanitizer} from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule} from "@taiga-ui/core";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ShopCartService} from "./services/shop-cart.service";
import {BooksService} from "./services/books.service";
import {HeaderModule} from "./components/header/header.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    HttpClientModule,
    HeaderModule,
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}, ShopCartService, BooksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
