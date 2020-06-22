export class RoutineItem {
    public name: string;
    public isDone: boolean;
    public orario: string;
  
    constructor(name: string, isDone: boolean, orario: string) {
      this.name = name;
      this.isDone = isDone;
      this.orario = orario;
    }
  }