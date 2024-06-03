export default class StaticTest{

    static getFromStorage(){
        let numBlocks = localStorage.getItem('numBlocks');
        let width = localStorage.getItem('width');
        let base = width/numBlocks;

        return base;
    }

}