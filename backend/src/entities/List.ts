import {Card} from "./Card.ts";

export class List{
  id: string;
  title: string;
  boardId: string;
  cards: Card[];
  position: number;
  createdAt: Date;
  updatedAt: Date;

  constructor(id: string, title: string, boardId: string, position: number){
    this.id = id;
    this.title = title;
    this.boardId = boardId;
    // cards should be empty 
    this.position = position;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  updateTitle(newTitle: string){
    if(!newTitle.trim()) throw new Error(`Title can't be empty.`)
    this.title = newTitle;
    this.updatedAt = new Date();
  }

  updatePosition(newPosition: number){
    if(!newPosition) throw new Error("Position can't be null.")
    this.position = newPosition;
    this.updatedAt = new Date();
  }


  addCard(newCard: Card): boolean{
    if(!newCard.id || !newCard.id.trim()) throw new Error("Id for card can't be null");
    if(!newCard.title || !newCard.title.trim()) throw new Error("title for card can't be null");
    if(this.cards.some(card => card.id === newCard.id)) throw new Error("Card with this ID already exists");
    this.cards.push(newCard);
    this.updatedAt = new Date();
    console.log(`New card has been succesfully added to the list:${this.title}`);
    return true;
  }

  removeCard(cardId: string){
    if(!cardId || !cardId.trim()) throw new Error("Card ID cannot be null");

    const initialSizeOfCardsArray = this.cards.length;

    this.cards = this.cards.filter(card => card.id !== cardId);

    if(initialSizeOfCardsArray === this.cards.length) return false // The size remained the same, so nothing was removed

    this.updatedAt = new Date();
    return true;
  }

  getCard(cardId: string): Card | undefined {
    if(!cardId || !cardId.trim()) throw new Error("Id for card can't be null");
    return this.cards.find(card => card.id === cardId);
  }
}

