import {Injectable, OnInit} from "@angular/core";
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {Book} from "../interfaces/book";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BooksService {
  public searchValue$ = new BehaviorSubject<string | null>(null);
  public currentCategory$ = new BehaviorSubject<string | null>(null);
  public currentBook$ = new BehaviorSubject<Book | null>(null);

  constructor(private http: HttpClient) {
    this.searchValue$.next(localStorage.getItem("searchValue"));
  }

  public search(value: string | null): void {
    this.searchValue$.next(value);
    localStorage.setItem('searchValue', value ?? '');
  }

  public getFilteredBooks$(): Observable<Book[]> {
    return combineLatest([
      this.http.get<Book[]>('assets/books.json'),
      this.searchValue$,
    ]).pipe(
      map(([books, searchValue]: [Book[], string | null]) => books.filter((book) => {
        if (searchValue) {
          return book.author.toLowerCase().includes(searchValue.toLowerCase()) || book.title.toLowerCase().includes(searchValue.toLowerCase());
        }
        return false;
      })),
    );
  }

  public getBooksByCategory$(): Observable<Book[]> {
    return combineLatest([
      this.http.get<Book[]>('assets/books.json'),
      this.currentCategory$,
    ]).pipe(
      map(([books, currentCategory]: [Book[], string | null]) => books.filter((book) => {
        if (currentCategory) {
          return book.category === currentCategory;
        }
        return false;
      })),
    );
  }

  public setCategory(category: string | null): void {
    this.currentCategory$.next(category);
  }

  public setBook(book: Book | null): void {
    this.currentBook$.next(book);
  }
}
