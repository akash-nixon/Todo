import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  public GetTask(){
    return this.http.get("http://localhost:8081/task");
  }

  public updateTaskById(id:number,task:Task| any){
    return this.http.put("http://localhost:8081/task/"+id,task);
  }

  public deleteTaskById(id:number){
    return this.http.delete("http://localhost:8081/task/"+id);
  }
  public doCreateTask(task: Task | any) {
    return this.http.post("http://localhost:8081/task",task);
  }

}
