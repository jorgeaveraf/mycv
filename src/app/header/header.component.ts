import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../Services/header.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = "Jorge";
  title: string = "Data analyst";
  objective: string = "I want to be a great developer";

  photo: string = "aquí va una imagen";
  email: string = "jorgeaveraf@gmail.com";
  phone: string = "272 238 7763";
  location: string = "Orizaba, Veracruz, México";
  social: string = "@DER";

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.getHeader().subscribe((data: any) => {
      console.log(data);

      this.name = data.name;
      this.title = data.title;

      this.objective = data.objective;
      this.photo = data.photo;
      this.email = data.email;
      this.phone = data.phone;
      this.location = data.location;
      this.social = data.social;
    }
    );
  }






}