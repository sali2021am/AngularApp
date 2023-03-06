import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private oauthsSrvice : OAuthService,
    private router : Router
    ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      var hasIdToken = this.oauthsSrvice.hasValidIdToken();
      var hasAccessToken = this.oauthsSrvice.hasValidAccessToken();
      if (hasIdToken && hasAccessToken){
        return true;
      }
      else{
        this.router.navigate(["/welcome"]);
        return false;
      }
  }
  
}
