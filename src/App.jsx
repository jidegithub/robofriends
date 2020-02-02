import React, {Component, Fragment} from 'react';
import CardList from './components/cardList';
import SearchBox from './components/searchBox';
import Scroll from './components/scroll'
import ErrorBoundary from './components/ErrorBoundary'
// import 'bootstrap/dist/css/bootstrap.css';

class App extends Component{
    constructor(){
        super()
       this.state = {
        robots: [],
        Searchfield:""
        }
    }
        
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>{this.setState({ robots: users})});
        console.log('it did mount')
        // this.setState({robots: robots})
    }

    onSearchChange = (event) => {
        this.setState({Searchfield: event.target.value})
       
    }

    render(){
         const filteredRobots = this.state.robots.filter((robots_param) => {
            return robots_param.name.toLowerCase().includes(this.state.Searchfield.toLowerCase());
        });
        
        // should incase server responds slowly
        if(this.state.robots.length === 0){ 
            return <p className='tc'>loading...</p>
        }else{
            return(
                <Fragment>
                    <div className='tc'>
                        <h1>RoboFriends</h1>
                        <SearchBox SearchChange={this.onSearchChange}/>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots ={ filteredRobots } />
                            </ErrorBoundary> 
                        </Scroll> 
                    </div>  
                </Fragment>
            )
        } 
    }
}

export default App;

 