import {Component, OnInit, Input, Inject} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../Task";
import {MatDialog, MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UpdateComponent} from "../update/update.component";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks: Task[] | any;
  isUpdate: boolean = false;
  private _router: any;

  constructor(private service: TaskService, public dialog: MatDialog) {

  }

  public deleteTaskById(id: number) {
    this.service.deleteTaskById(id).subscribe((data) => this.tasks = data);
  }

  ngOnInit() {
    this.service.GetTask().subscribe((data) => this.tasks = data);

  }

  public update(task: Task) {
    this.isUpdate = true;
  }

  openDialog(t: Task) {
    const dialogRef = this.dialog.open(UpdateComponent, {data: t});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this._router.url;
    this._router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this._router.navigate([currentUrl]);
      console.log(currentUrl);
    });
  }
}
