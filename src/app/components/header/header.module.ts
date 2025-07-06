import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  TuiBreadcrumbsModule,
  TuiCarouselModule,
  TuiInputModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiRatingModule
} from '@taiga-ui/kit';
import {TuiButtonModule, TuiLinkModule, TuiSvgModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HeaderComponent} from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TuiCarouselModule,
    TuiIslandModule,
    TuiButtonModule,
    TuiMarkerIconModule,
    TuiMoneyModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiSvgModule,
    TuiRatingModule,
    TuiBreadcrumbsModule,
    TuiLinkModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {
}
