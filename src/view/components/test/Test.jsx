import React, { Component /*,PropTypes*/} from 'react'
import {View} from 'ea-react-dm'
import {Head,Footer} from 'ea-head'
import TestControl from '../../../controller/TestControl'
import BookList from './BookList'
import '../../styles/test.less'

@View(TestControl)
export default class Test extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const logo = {
            className: 'null',
            title: 'EA'
        }

        return (
            <div>
                <Head logo={logo} />
                <BookList {...this.props} />
                <Footer content=''/>
            </div>
        )
    }
}

/*let url = window.location.hash
if(url.match('#/')==null && window.location.href.match('index')==null ){
    //alert(121212);
    page(Test)
}*/
