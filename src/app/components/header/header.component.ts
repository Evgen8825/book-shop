import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {ShopCartService} from "../../services/shop-cart.service";
import {distinctUntilChanged, map, Observable} from "rxjs";
import {FormControl} from "@angular/forms";
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  public selectedBooksAmount$: Observable<number> | undefined;
  public search = new FormControl('');

  constructor(
    private router: Router,
    private shopCartService: ShopCartService,
    private booksService: BooksService,
  ) {

  }

  ngOnInit() {
    this.selectedBooksAmount$ = this.shopCartService.booksAmount$;

    this.search.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe((value: string | null) => {
          this.booksService.search(value);

          if (value) {
            this.router.navigate([`/search`]);

            return;
          }

          this.router.navigate([``]);
        }
      );

    this.booksService.searchValue$
      .pipe(distinctUntilChanged())
      .subscribe((value: string | null) => {
        this.search.setValue(value);
      });
  }

  public showShopCart(): void {
    this.router.navigate(['/shop-cart']);
  }
}
