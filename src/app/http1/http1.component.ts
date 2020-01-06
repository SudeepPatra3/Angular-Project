import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-http1",
  templateUrl: "./http1.component.html",
  styleUrls: ["./http1.component.css"]
})
export class Http1Component implements OnInit {
  posts: any[];
  private url = "https://test.1ounce.in/ounceAdmin/ounceBuyOrders/";
  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).subscribe(data => {
      this.posts = data.results;
    });
  }

  ngOnInit() {
    window
      .fetch(this.url)
      .then(data => {
        data
          .json()
          .then(item => {
            console.log(item);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
}
