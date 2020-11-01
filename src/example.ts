// TASK 1

// Работа с простыми типами




function concat (first:string,second:string){
    return first+second;
}

console.log(concat('Hello','World'));

// TASK 2
// Работа с интерфейсами


type MyHometask={howIDoIt:string,simeArray:[string | number],withData:[object:string | [] | number]}

const MyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}



// TASK 3
// Типизация функций, используя Generic

// В уроке про Generics мы написали интерфейс массива MyArray...

interface MyArray<T> {
	[N: number]: T;
	reduce(fn:(e:T)=>T):T;

	
}

const arr:MyArray<number> = [1,2,3,4,5,6,7,8];
let result = arr.reduce(function(sum, current) {
	return sum + current;
  }, 0);


