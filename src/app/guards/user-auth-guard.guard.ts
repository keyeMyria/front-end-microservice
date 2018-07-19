import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

import {UserService} from '../services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuardGuard implements CanActivate {

	constructor(private router: Router, private userService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
			if (this.userService.isLoggedIn()) {
	      return true;
	    } else {
	      this.router.navigate(['login'], {queryParams: {redirectTo: state.url}});
	      return false;
	    }
  }
}
