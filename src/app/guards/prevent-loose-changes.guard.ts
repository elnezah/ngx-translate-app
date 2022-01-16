import { HomeComponent } from "./../pages/home/home.component";
import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PreventLooseChangesGuard implements CanDeactivate<HomeComponent> {
  private static readonly TAG = "PreventLooseChangesGuard";

  canDeactivate(
    component: HomeComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.hasUnsavedChanges)
      return confirm(
        "You will loose your changes if you leave now. Do you want to leave anyway?"
      );

    return true;
  }
}
