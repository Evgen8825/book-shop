import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
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
import {BookListComponent} from "./book-list.component";

export const routes: Routes = [
  {path: '', component: BookListComponent},
];

@NgModule({
  declarations: [BookListComponent],
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
  ],
})
export class BookListModule {
}
