import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../Services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: any[] = [];

  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((data: any) => {
      this.skills = data.map((item: any) => {
        return {
          skill: item.skill
        };
      });
    });
  }
}
