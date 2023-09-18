import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../Services/interests.service';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit{
  interests: any[] = [];

  constructor(private interestService: InterestsService) { }

  ngOnInit(): void {
    this.interestService.getInterests().subscribe((data: any) => {
      this.interests = data.map((item: any) => {
        return {
          interest: item.interest
        };
      });
    });
  }
}
