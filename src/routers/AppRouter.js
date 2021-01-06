import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from 'react-router-dom';
import {Navbar } from '../components/ui/navbar'
import {Footer} from '../components/ui/footer'
import {ContactScreen} from '../components/contact/ContactScreen'
import {homeScreen} from '../components/home/homeScreen'
import {ProjectsScreen} from '../components/projects/ProjectsScreen'

export const AppRouter = () => {
	return (

    <div>
		 <Router>
      <div>
       
      	<Navbar/>
              <Switch>
        
          	<Route exact path="/" component={homeScreen} />

          	<Route exact path="/porjects" component={ProjectsScreen} />

          	<Route exact path="/contact" component={ContactScreen}/>

        </Switch>
      
      </div>


    </Router>

    <Footer/>

    </div>
	)
}

