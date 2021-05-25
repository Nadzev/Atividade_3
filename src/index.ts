import { stringify } from "querystring";

class Functions{
    /*num: number;
    word : string;
    w1 : string;
    w2 : string;
    constructor(num :number, word:string, w1 : string, w2: string){
        this.num = num;
        this.word = word;
        this.w1 = w1;
        this.w2 = w2;
    }*/
    /*ama,abcba,*/ 
    impar_ou_par(num : number){
        if(num%2 == 0){
            console.log("O número é par");
        }
        else{
            console.log("O número é impar");
        }
    }
    palindromo(word : string){
        /*let tam : number = (this.word.length)
        let vetor : string[] = [];*/
        let word1 = word.split('');
        let m = word1.reverse();
        let w = m.join("");
        console.log(w);
        if(w !=word){
            console.log("Não é palindroma");
        }
        else{
            console.log("É palindroma");
        }
    }
    anagrama(word1: string , word2: string){
        let newWord1  = word1.split('');
        let newWord2 = word2.split('');
        newWord1 = newWord1.sort();
        let n = newWord1.join("");
        newWord2 = newWord2.sort();
        let m = newWord2.join("");
        let o = m
        if(n == m){
            console.log('É um anagrama');
        }
        else{
            console.log('Não é um anagrama');
        }

    }
    mudar_caractere(wo: string){
        /*let lista = new Map();*/
        let lista = new Array
        for(let i = 0;i<wo.length;i++){
            let as = wo.charCodeAt(i);
            /*lista.set(as, wo[i]);**/
            console.log(wo[i],"=",as);
        }
        /*console.log(lista);*/
    }

}
let a ;
a = new Functions();
a.impar_ou_par(11);
a.palindromo('laranje');
a.anagrama("roma","amor");
a.mudar_caractere("biscoito");