export default class StaticTest{

    static getFromStorage(){
        let numBlocks = sessionStorage.getItem('numBlocks');
        let width = sessionStorage.getItem('width');
        let base = width/numBlocks;

        return base;
    }

}