import { Component, OnInit } from "@angular/core";
import { HttpService } from "./../http.service";

@Component({
  selector: "app-http",
  templateUrl: "./http.component.html",
  styleUrls: ["./http.component.css"]
})
export class HttpComponent implements OnInit {
  constructor(private restService: HttpService) {}
  posts: any[];
  //posts1:any[];

  ngOnInit() {
    this.restService.getPosts().subscribe(post => {
      this.posts = post;
    });
    // this.restService.getPosts1().subscribe(post => {
    //   this.posts1 = post;
    // });
  }
  removePosts(post){
    let index=this.posts.indexOf(post);
    this.posts.splice(index,1);
  }

}
