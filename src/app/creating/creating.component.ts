import { Component, OnInit } from '@angular/core';
import {Task} from "../Task";
import {TaskService} from "../task.service";

@Component({
  selector: 'app-creating',
  templateUrl: './creating.component.html',
  styleUrls: ['./creating.component.css']
})
export class CreatingComponent implements OnInit {

  task: Task = new Task(0, "", "", "");

  constructor(private service: TaskService) {
  }

  ngOnInit() {
  }

  public createTask() {
    this.service.doCreateTask(this.task).subscribe(res => {
      console.log(res);

    });
  }

  refresh(): void {
    window.location.reload();
  }

}
