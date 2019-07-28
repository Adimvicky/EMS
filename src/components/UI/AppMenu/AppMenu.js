import React, { Component } from 'react';
import AppMenuItem from '../AppMenuItem/AppMenuItem';
import config from '../../../config'
import Aux from '../../../containers/Auxiliary/Auxiliary';
import { Timeline } from '@material-ui/icons'

let { menuItemNames } = config;
class AppMenu extends Component {
    state = {
        menu : [
            { 
                label : menuItemNames.algebra,
                submenu : [
                    { label : "Algebraic Expressions", to : '/algebra/expressions'},
                    { label : "Matrices", to : '/algebra/matrices'}
                ]
            },
            { 
                label : menuItemNames.approximations,
                submenu : [
                    { label : "McLauren's Series", to : '/approx/mclauren'},
                    { label : "Taylor's Series", to : '/approx/taylor'}
                ]
            },
            { 
                label : menuItemNames.calculus,
                to : '/calculus'
            },
            { 
                label : menuItemNames.geometryAndTrig,
                to : '/geometry'
            },
            { 
                label : menuItemNames.probAndStats,
                to : '/probandstats',
            },
            
            { 
                label : menuItemNames.unitConversion,
                to : '/conversion'
            },
            { 
                label : menuItemNames.constants,
                to : '/constants'
            },
        ]
    }

    render(){
        return (
            <div>
                {this.state.menu.map((menuItem) => {
                    return <AppMenuItem item={menuItem} hasSubmenu={menuItem.submenu ? true : false} key={menuItem.label}/>
                })}
            </div>
        )
    }
}

export default AppMenu;