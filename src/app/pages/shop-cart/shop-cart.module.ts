import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  TuiBadgeModule,
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
import {ShopCartComponent} from "./shop-cart.component";

export const routes: Routes = [
  {path: '', component: ShopCartComponent},
];


@NgModule({
  declarations: [ShopCartComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
    TuiBadgeModule,
  ],
})
export class ShopCartModule {
}
