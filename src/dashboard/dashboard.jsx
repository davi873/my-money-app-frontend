import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends Component {
    render(){
        return (
            <div>
                <ContentHeader title="Dashboard" small="version 1.0" />
                <Content>
                    <h1>Teste</h1>
                </Content>
            </div>
        )
    }
        
    
}

export default Dashboard