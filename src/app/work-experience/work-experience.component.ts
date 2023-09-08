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


