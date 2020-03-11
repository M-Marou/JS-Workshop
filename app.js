
var favoriteBooks = ["got","harry potter"];
function addFavoriteBook(bookName){
    var bookcheck = bookName.includes("Great");
    if(bookcheck != true){
        favoriteBooks.push(bookName);
    }
}

function printFavoriteBooks(){
    for (let bk of favoriteBooks){
        console.log("Livres favoris :" + bk);
    }  
}