import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

//declare var $: any;

@Component({
  selector: "app-full-layout",
  templateUrl: "./full.component.html",
  styleUrls: ["./full.component.scss"],
})
export class FullComponent implements OnInit {

  constructor(public router: Router) {}
  public isCollapsed = false;
  public innerWidth: number = 0;
  public showMobileMenu = false;
  public expandLogo = false;

  Logo() {
    this.expandLogo = !this.expandLogo;
  }

  ngOnInit() {
    if (this.router.url === "/") {
      this.router.navigate(["/dashboard"]);
    }

  }


}
