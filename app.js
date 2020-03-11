var favoriteBooks = ["got","harry potter"];
function addFavoriteBook(bookName){
    var bookcheck = bookName.includes("Great");
    if(bookcheck != true){
        favoriteBooks.push(bookName);
    }
}

var Livres = ["100 Years", "Wanted", "Hearth of Light"];
function printFavoriteBooks(){
    for (let bk of Livres){
        favoriteBooks.push(bk);
        console.log("Livres favoris :" + " " + bk);
    }  
}