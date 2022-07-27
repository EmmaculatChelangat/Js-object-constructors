function Book(title, author,noPages) {
    this.title = title;
    this.author = author;
    this.pages = Page;
    this.readOrNot = function (){
        if(this.title= read){
            console.log('read the book')
        }else{
            console.log('not read the book')
        }
    }
}

Book.prototype.description= function(){
    return `${this.title} by ${this.author} is ${this.page} long`
}
var book = new Book('Think big','william Shakespeare',84)
