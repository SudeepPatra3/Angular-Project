import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { EmployeesComponent } from "./employees/employees.component";
import { HomeComponent } from "./home/home.component";
import { FilterPipe } from "./filter.pipe";
import { FormsModule } from "@angular/forms";
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { HttpComponent } from "./http/http.component";
import { HttpClientModule } from "@angular/common/http";
import { WelcomeComponent } from "./welcome/welcome.component";
import { Http1Component } from "./http1/http1.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    FilterPipe,
    SignupComponent,
    LoginComponent,
    PagenotfoundComponent,
    HttpComponent,
    WelcomeComponent,
    Http1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "home", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "signup", component: SignupComponent },
      { path: "http", component: HttpComponent },
      { path: "http1", component: Http1Component },
      { path: "**", component: PagenotfoundComponent }
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
