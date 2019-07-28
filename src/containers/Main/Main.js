import React from 'react';
import { Switch,Route } from 'react-router-dom';

import Home from '../../components/Home/Home';
// Math Imports
import Expressions from '../../components/Math/Algebra/Expressions';
import Matrices from '../../components/Math/Algebra/Matrices';
import Calculus from '../../components/Math/Calculus/Calculus';
import McLauren from '../../components/Math/McLauren/McLauren';
import Taylor from '../../components/Math/Taylor/Taylor';
import Geomtery from '../../components/Math/Geometry/Geometry';
import Constants from '../../components/Math/Constants/Constants';
import Conversion from '../../components/Math/Conversion/Conversion';
import ProbAndStats from '../../components/Math/ProbAndStats/ProbAndStats';

const main = (props) => {
    return (
        <div className="MainContent">
            <Switch>
                <Route path="/algebra/expressions" component={Expressions}/>
                <Route path="/algebra/matrices" component={Matrices}/>
                <Route path="/calculus" component={Calculus}/>
                <Route path="/approx/mclauren" component={McLauren}/>
                <Route path="/approx/taylor" component={Taylor}/>
                <Route path="/geometry" component={Geomtery}/>
                <Route path="/probandstats" component={ProbAndStats}/>

                <Route path="/conversion" component={Conversion}/>
                <Route path="/constants" component={Constants}/>
                <Route path='/' component={Home} />
            </Switch>
        </div>
    )
}

export default main;