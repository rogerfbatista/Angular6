export class Curso {

    title: string = '';
    tag: string = '';
    summary: string = '';
    description: string = '';
    level: number = 0;
    duration: number = 0;
    classes: number;
    views: number;

    
    
    constructor(values:object={}){
        Object.assign(this,values);

    }
    
}
