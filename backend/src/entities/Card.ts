export class Card {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, title: string, description: string, completed = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.completed = completed;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  toggleCompletion() {
    this.completed = !this.completed;
    this.updatedAt = new Date();
  }

  updateTitle(newTitle: string){
    if(!newTitle.trim()) throw new Error("Title cannot be empty")
    this.title = newTitle;
    this.updatedAt = new Date();
  }

  updateDescription(newDescription: string){
    if(!newDescription.trim()) throw new Error("Description cannot be empty");
    this.description = newDescription;
    this.updatedAt = new Date();
  }
}
