import {Control,fetch} from 'gfs-react-dm'
import TestModel from '../model/TestModel'

@Control(TestModel )
export default class TestControl{

    static queryBookTypes(){

        return (dispatch)=>{
            fetch('/test').then((data)=>{
                dispatch(this.update(data.data) )
            })
        }
    }

    static getBooks(index,bookList){
        //根据此类生成的update方法
        return this.update('books',bookList[index] )
    }
    static updateBook(index,value){
        //console.log('updateBook : ', index);
        return (dispatch)=>{
            //根据此类生成的update方法
            dispatch(this.update(`books.${index}`,value))
            //根据此类生成的update方法
            dispatch(this.update('updateIndex',-1) )
        }
    }

    static delBook(index){
        //根据此类生成的del方法
        //console.log('delBook : ', index);
        return this.del(`books.${index}`)
    }

    static updateBookModel(key,value){
        return this.update(key,value)
    }
}