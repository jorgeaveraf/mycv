import { Component, OnInit } from '@angular/core';
import { WorkService } from '../Services/work.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
<<<<<<< HEAD
export class WorkExperienceComponent implements OnInit{
=======
export class WorkExperienceComponent {
  company: string = "SIP";
  Sdate: string = "jul 2021";
  Edate: string = "currently";
  role: string = "data analyst";
  city: string = "Orizaba";
  country: string = "Mexico";
  accomplishments: string = "some text";
  

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getHeader().subscribe((data: any) => {
      console.log(data);

      this.role = data.puesto;
      this.company = data.empresa;
      this.Sdate = data.fecha_inicio;
      this.Edate = data.fecha_fin;
      this.city = data.ciudad;
      this.country = data.pais;
      this.accomplishments = data.logros;
      
    }
    );
  }
>>>>>>> 87cc83b51ad975d1a496eef1f89dcb1f29958f7d

  company: string = "SIP";
  Sdate: string = "jul 2021";
  Edate: string = "currently";
  role: string = "data analyst";
  city: string = "Orizaba";
  country: string = "Mexico";
  accomplishments: string = "some text";


  workExperience: any[] = [];

  constructor(private workService: WorkService) { }

  ngOnInit(): void {
    this.workService.getHeader().subscribe((data: any) => {
      this.workExperience = data.map((item: any) => {
        return {
          Sdate: `${item.fecha_inicio} - ${item.fecha_fin}`,
          city: `${item.ciudad}, ${item.pais}`,
          role: item.puesto,
          company: item.empresa,
          accomplishments: item.logros
        };
      });
    });
  }
}
}