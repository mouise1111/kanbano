import { List } from "./List";
import {BoardMember} from "./BoardMember";
export class Board{
  id: string;
  title: string;
  description: string;
  ownerId: string;
  lists: List[];
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
  members: BoardMember[];
  // archived: boolean 
  // position: number 
  constructor(id: string, title: string, ownerId: string, isPrivate: boolean = true, description?: string){
    this.id = id;
    this.title = title;
    this.description = description || "";
    this.ownerId = ownerId;
    this.isPrivate = isPrivate;
    this.lists = [];
    this.members = [];
  }

  updateTitle(newTitle: string){
    if(!newTitle.trim()) throw new Error("Title cannot be null");
    this.title = newTitle;
    this.updatedAt = new Date();
  } 


  updateDescription(newDescription: string){
    if(!newDescription.trim()) throw new Error("Description cannot be null");
    this.description = newDescription;
    this.updatedAt = new Date();
  } 

  addList(list: List): boolean{
    if(!list.id.trim()) throw new Error("id not found for this list");
    if(!list.title.trim()) throw new Error("title cannot be null");
    if(this.lists.some(l => l.id === list.id))  throw new Error("List with this ID is already exists in this board");
    
    this.lists.push(list);
    this.updatedAt = new Date();
    return true
  }

  removeList(listId: string) : boolean{
    if(!listId.trim()) throw new Error("List ID cannot be null.");
    
    const initialListLength = this.lists.length;
    this.lists = this.lists.filter(list => list.id !== listId);

    if(initialListLength === this.lists.length) {
      return false 
    } else{
      return true;
    }

  }
  changeVisibility(){
    this.isPrivate = !this.isPrivate;
    
    this.isPrivate ? console.log("Board visibility: private") : console.log("Board visibility: public");
  }
 
}
