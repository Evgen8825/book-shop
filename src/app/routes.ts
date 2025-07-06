import {MainModule} from "./pages/main/main.module";
import {Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule)
  },
  {
    path: 'shop-cart',
    loadChildren: () => import('./pages/shop-cart/shop-cart.module').then(m => m.ShopCartModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/book-list/book-list.module').then(m => m.BookListModule)
  },
  {
    path: 'book',
    loadChildren: () => import('./pages/book/book.module').then(m => m.BookModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/books-by-category/books-by-category.module').then(m => m.BooksByCategoryModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
