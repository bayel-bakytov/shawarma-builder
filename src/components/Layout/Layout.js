import React from 'react'
import Drawer from './Drawer/Drawer';
import Toolbar from './Toolbar/Toolbar';

export default ({children}) => (
        <div className="Layout">
            <Toolbar/>
            <Drawer/>
            {children}
        </div>  
);
