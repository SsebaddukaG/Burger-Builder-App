import React, {Component} from 'react'

import Auxiliary from '../../hoc/Auxirialy'
import Burger from '../../components/Burger/Burger'

class BurgerBuilder extends Component{
    render (){
        return(
            <Auxiliary>
                <Burger/>
                <div>Builder Controls</div>
            </Auxiliary>
        );
    }
}

export default BurgerBuilder;