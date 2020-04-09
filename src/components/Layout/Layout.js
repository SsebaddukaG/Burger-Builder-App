import React from 'react'

import Auxiarily from '../../hoc/Auxirialy'
import classes from './Layout.module.css'

//its a wrapper class components

const layout = (props) =>(
    <Auxiarily>
        <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Auxiarily>
    
);

export default layout;