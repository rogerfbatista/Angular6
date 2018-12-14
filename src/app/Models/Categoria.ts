export class Categoria {

    id:number =0;
    titulo: string = '';
    produto: string = '';
   

    
    
    constructor(values:object={}){
        Object.assign(this,values);

    }
    
}
