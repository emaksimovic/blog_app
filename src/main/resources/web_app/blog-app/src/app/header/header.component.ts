import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated = true /*false*/ ;
  // private userSub: Subscription;

  constructor(
    /*private dataStorageService: DataStorageService,
    private authService: AuthService,
    private store: Store<fromApp.AppState>*/
  ) {}

  ngOnInit() {
    /*this.userSub = this.store
      .select('auth')
      .pipe(map(authState => authState.user))
      .subscribe(user => {
        this.isAuthenticated = !!user;
        console.log(!user);
        console.log(!!user);
      });*/
  }

  onSaveData() {
    //this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    //this.dataStorageService.fetchRecipes().subscribe();
  }

  onLogout() {
    //this.authService.logout();
  }

  ngOnDestroy() {
    //this.userSub.unsubscribe();
  }

}
