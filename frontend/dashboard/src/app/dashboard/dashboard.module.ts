import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { FeedsComponent } from "./dashboard-components/feeds/feeds.component";
import { TopCustomersComponent } from "./dashboard-components/top-customers/top-customers.component";
import { TopCardsComponent } from "./dashboard-components/top-cards/top-cards.component";
import { BlogCardsComponent } from "./dashboard-components/blog-cards/blog-cards.component";
import { MonthlySalesComponent } from "./dashboard-components/monthly-sales/monthly-sales.component";


const routes: Routes = [
  {
    path: "",
    data: {
      title: "Dashboard",
      urls: [{ title: "Dashboard", url: "/dashboard" }, { title: "Dashboard" }],
    },
    component: DashboardComponent,
  },
];

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent,
    FeedsComponent,
    TopCustomersComponent,
    TopCardsComponent,
    BlogCardsComponent,
    MonthlySalesComponent,
  ],
})
export class DashboardModule {}
