import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  searchId: number | null = null;
  private searchSubject = new Subject<number | null>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.searchSubject.pipe(
      debounceTime(300) // تأخير 300 مللي ثانية
    ).subscribe(id => {
      if (id !== null && id > 0) {
        this.router.navigate(['/user', id]);
      }
    });
  }

  onSearch() {
    this.searchSubject.next(this.searchId);
  }
}
