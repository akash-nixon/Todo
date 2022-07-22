import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Task} from "../Task";
import {TaskService} from "../task.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  taskFrom  :FormGroup| any;

  @Input() beaverage="tea";
  task: Task = new Task(0,"","","") ;
  constructor(private service:TaskService, private formBuilder : FormBuilder,private matref:MatDialogRef<UpdateComponent>,@Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit() {
    this.taskFrom =this.formBuilder.group({
        id: ['', Validators.required],
      task:['', Validators.required],
      cr_time:['', Validators.required],
      due_time:['', Validators.required]
    })
    if(this.editData){
      this.taskFrom.controls['task'].setValue(this.editData.task);
      this.taskFrom.controls['cr_time'].setValue(this.editData.cr_time);
      this.taskFrom.controls['due_time'].setValue(this.editData.due_time);
      this.taskFrom.controls['id'].setValue(this.editData.id)
    }
  }
  public updateTask(){
    console.log(this.taskFrom.value)
    this.service.updateTaskById(this.editData.id,this.taskFrom.value).subscribe(res =>{
      console.log(res);
      this.matref.close('Update');
    });

  }
}
