import {Component, EventEmitter, HostListener, Input, OnInit, Output} from "@angular/core";
import {Book} from "../../interfaces/book";
import {BehaviorSubject, Observable} from "rxjs";
import {BooksService} from "../../services/books.service";
import {ShopCartService} from "../../services/shop-cart.service";
import {Router} from "@angular/router";

@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.less']
})
export class BookListComponent implements OnInit {
  public filteredBooks$: Observable<Book[]> | undefined;
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
    this.filteredBooks$ = this.booksService.getFilteredBooks$();
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
