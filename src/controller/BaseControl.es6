import {Control,fetch} from 'gfs-react-dm'
import TestModel from '../model/TestModel'
import BaseControl from 'BaseControl'

@Control(TestModel )
export default class TestControl extends BaseControl{

    static getBooks(index,bookList){
        //根据此类生成的update方法
        window.console.log('getBooks', index,bookList)
        return this.update('books',bookList[index] )
    }
    static updateBook(index,value){
        window.console.log('updateBook : ', index)
        return (dispatch)=>{
            //根据此类生成的update方法
            dispatch(this.update(`books.${index}`,value))
            //根据此类生成的update方法
            dispatch(this.update('updateIndex',-1) )
        }
    }
    
    static delBook(index){
        //根据此类生成的del方法
        window.console.log('delBook : ', index)
        return this.del(`books.${index}`)
    }

    static updateBookModel(key,value){
        window.console.log('updateBookModel', key,value)
        return this.update(key,value)
    }

    static getBooks1(index,bookList){
        //根据此类生成的update方法
        window.console.log('updateBookModel', index, bookList)
        return this.update('books',bookList[index] )
    }
}