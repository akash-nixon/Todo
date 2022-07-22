export class Task{

  public id: number;
  public task: string;
  public cr_time: string;
  public due_time: string;


  constructor(

    id:number,
    task:string,
    cr_time:string,
    due_time:string

  ) {
    this.id = id;
    this.task=task;
    this.cr_time=cr_time;
    this.due_time=due_time;

  }

}


