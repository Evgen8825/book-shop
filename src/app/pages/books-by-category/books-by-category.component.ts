import {Component, HostListener, OnInit} from "@angular/core";
import {Book} from "../../interfaces/book";
import {map, Observable} from "rxjs";
import {BooksService} from "../../services/books.service";
import {ShopCartService} from "../../services/shop-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'book-list',
  templateUrl: './books-by-category.component.html',
  styleUrls: ['./books-by-category.component.less']
})
export class BooksByCategoryComponent implements OnInit {
  public booksByCategory$: Observable<Book[]> | undefined;
  public category$: Observable<string> | undefined;
  public screenWidth: number = 0;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
  }

  constructor(
    private booksService: BooksService,
    private shopCartService: ShopCartService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.booksByCategory$ = this.booksService.getBooksByCategory$();
    this.category$ = this.booksByCategory$.pipe(
      map((books: Book[]) => books[0].category),
    );
  }

  public selectBook(book: Book) {
    this.shopCartService.addBook(book);
  }

  public showBook(book: Book) {
    this.booksService.setBook(book);
    this.router.navigate(['book']);
  }

  public reset(): void {
    this.router.navigate(['']);
  }
}
