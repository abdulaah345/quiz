import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  totalUsers: number = 0;
  pageSize: number = 6;
  currentPage: number = 1;
  searchId: number | null = null;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers(this.currentPage).subscribe((data: any) => {
      this.users = data.data;
      this.totalUsers = data.total;
    });
  }

  changePage(event: any): void {
    this.currentPage = event.pageIndex + 1;
    this.fetchUsers();
  }

  viewUserDetails(id: number): void {
    this.router.navigate(['/user', id]);
  }

  onSearch(): void {
    if (this.searchId) {
      this.userService.getUserById(this.searchId).subscribe(user => {
        if (user) {
          this.router.navigate(['/user', user.data.id]);
        }
      });
    }
  }
}
