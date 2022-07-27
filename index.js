function Book(title, author,page) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.readOrNot = function (){
        if(this.title= read){
            console.log('read the book')
        }else{
            console.log('not read the book')
        }
    }
}

Book.prototype.info= function(){
    return `${this.title} by ${this.author} is ${this.page} long`
}
var book = new Book('johnySun','Jonathan Sun',84)

console.log(Book)
book.info()
