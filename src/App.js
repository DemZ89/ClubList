import React, { useEffect, useState } from 'react' 
import ClubContext from './ClubContext' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ClubList from './ClubList' 
import ClubListInfo from './ClubItemInfo'







const App = () => {  

    








    return ( 
        <ClubContext>  
            <Router> 
            <div>  
                <Switch> 
                    <Route exact path="/" component={ClubList} /> 
                    <Route exact path="/info" component={ClubListInfo} />
                </Switch>
             </div>
            </Router>
        </ClubContext>
       
    )
}

export default App
