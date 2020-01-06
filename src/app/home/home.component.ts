import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  employeedata = [
    {
      name: "sudeep",
      doj: '20 / 12 / 19',
      pos: "devloper",
      sal: 2000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "simu",
      doj: '09 / 08 / 21',
      pos: "tester",
      sal: 7000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "simun",
      doj: '10 / 11 / 18',
      pos: "tester",
      sal: 2000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "puppu",
      doj: '19 / 12 / 2022',
      pos: "devloper",
      sal: 10000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "srotaswini",
      doj: '20 / 12 / 19',
      pos: "devloper",
      sal: 80000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "xyz",
      doj: '28 / 12 / 16',
      pos: "ceo",
      sal: 12000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "sudeep",
      doj: '20 / 12 / 19',
      pos: "devloper",
      sal: 2000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "simu",
      doj: '09 / 08 / 21',
      pos: "tester",
      sal: 7000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "simun",
      doj: '10 / 11 / 18',
      pos: "tester",
      sal: 2000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "puppu",
      doj: '19 / 12 / 2022',
      pos: "devloper",
      sal: 10000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "srotaswini",
      doj: '20 / 12 / 19',
      pos: "devloper",
      sal: 80000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    },
    {
      name: "xyz",
      doj: '28 / 12 / 16',
      pos: "ceo",
      sal: 12000,
      img:
        "https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633249__340.png"
    }
  ];

 

  removeEmp(emp) {
    
    let index = this.employeedata.indexOf(emp);
    this.employeedata.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
