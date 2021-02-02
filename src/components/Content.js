
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from "./Home"
import Skills from "./Skills"




const Content = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                {/* <Route path="/Skills" component={Skills} /> */}
            </Switch>
        </div>
    )
}

export default Content
