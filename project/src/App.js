import React from 'react';


import GroceryList from './components/GroceryList';
import ListForm from './components/ListForm';
import './styles.css';

const groceries = [
    {
        name: 'Bananas',
        id: 123,
        purchased: false
    },
    {
        name: 'Torillas',
        id: 124,
        purchased: false
    },
    {
        name: 'Milk',
        id: 1235,
        purchased: false
    },
    {
        name: 'Pizza Sauce',
        id: 1246,
        purchased: false
    },
    {
        name: 'Raw Honey',
        id: 1237,
        purchased: false
    },
    {
        name: 'Granola',
        id: 1248,
        purchased: false
    }
]   ;

class App extends React.Component {
  // Constructor with state

  // What we inherit from React.Component
  // this.state
  // this.setState
  // lifecycle methods
    constructor() {
        super();
        this.state = {
        groceryList: groceries
        };
    }

  // const [someData, setSomeData] = useState('')
  // const [moreData, setSomeData] = useState([])

  // THE `this` KEYWORD 👻

  // Class methods to update state
    toggleItem = clickedId => {
        // no mutating the current state
        // for every array and every object - create a new one (..., or array methods)
        const newGroceryList = this.state.groceryList.map(item => {
        // loop through the array
        // find the item we clicked (id, maybe index)
        // toggle that item's purchased property
            if (item.id === clickedId) {
                // toggle purchased
                return {
                ...item,
                purchased: !item.purchased
                };
            } else {
                return item;
            }
        });

    // Update state with the new array
        this.setState({
            groceryList: newGroceryList
        });
    };

    addNewItem = itemText => {
        const newItem = {
            name: itemText,
            id: Date.now(),
            purchased: false
        };
        this.setState({
            groceryList: [...this.state.groceryList, newItem]
        })
    }

    render() {
        console.log('rendering...');
        return (
        <div className="App">
            <div className="header">
            <h1>Shopping List</h1>
            <ListForm 
                addNewItem={this.addNewItem}
            />
            </div>
            <GroceryList
            groceries={this.state.groceryList}
            toggleItem={this.toggleItem}

            />
        </div>
        );
    }
}

export default App;