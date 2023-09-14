import { Component } from '@angular/core';
import { CertificationService } from '../Services/certificates.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certification: any[] = [];

  constructor(private certificatesService: CertificationService) { }

  ngOnInit(): void {
    this.certificatesService.getCertification().subscribe((data: any) => {
      console.log(data);
      this.certification = data.map((item: any) => {      
        return {
          certification: item.certificacion,
          institution: item.institucion,
          date: item.fecha
        };
      });
      
    });

  }
}
