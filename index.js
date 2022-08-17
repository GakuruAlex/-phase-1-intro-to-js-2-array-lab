// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat =(name)=> {
    cats.push(name)
return cats;
};

const destructivelyPrependCat = (name)=>  {
    cats.unshift(name)

return cats;
};

const destructivelyRemoveFirstCat= (name)=> {
    cats.shift(name);
    return cats;
};

const destructivelyRemoveLastCat= (name)=>{
    cats.pop(name);
return cats;
};


const appendCat =(name)=>{

let newCats  =[...cats];

newCats.push(name);

return newCats;
}




const prependCat =(name)=>{

let newCats = [...cats];

newCats.unshift(name);

return newCats;

}

const removeLastCat =function (){

const newCats = [...cats];

return newCats.splice(1,newCats.length);

}