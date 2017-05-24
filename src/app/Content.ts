export class Content {
    
  private id: number;
  private title: string;
  private body: string;
  private author: string;
    
  constructor( id: number, title: string, body:string, author:string){
        
        this.id = id;
        this.title = title;
        this.body = body;
        this.author = author;
    }
}