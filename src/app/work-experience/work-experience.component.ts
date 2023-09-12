import { Component } from '@angular/core';
import { WorkService } from '../Services/work.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent {


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
