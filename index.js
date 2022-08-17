// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat =(name,cats) =>{
    cats.push(name)
return cats;
};

const destructivelyPrependCat =(name,cats) => {
    cats.unshift(name)

return cats;
};

const destructivelyRemoveFirstCat =(name,cats) =>{
    cats.shift(name);
    return cats;
};

const destructivelyRemoveLastCat =(name,cats) =>{
    cats.pop(name);
return cats;
};


const appendCat = function(name,destructivelyAppendCat){

let newCats  =[...cats];

destructivelyAppendCat(name,newCats);

return newCats;
}




const prependCat =(name,destructivelyPrependCat)=>{

let newCats = [...cats];

destructivelyPrependCat(name,newCats);

return newCats;

}



console.log(prependCat("Ralph" ,destructivelyPrependCat));