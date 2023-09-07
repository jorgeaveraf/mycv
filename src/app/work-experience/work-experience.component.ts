import { Component } from '@angular/core';
import { WorkService } from '../Services/work.service';


@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
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

}

