import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService } from 'src/app/services/project_service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ProjectService]
})
export class LoginComponent implements OnInit {

  public project:Project;
  constructor(private _projectService:ProjectService) { 
    this.project=new Project("","","");
  }

  ngOnInit(): void {
  }

}
