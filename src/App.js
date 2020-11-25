import React from 'react';
import './App.css';
//import Actors from './components/Actors'
import contacts from './contacts.json';


class App extends React.Component {
    state = {
            contacts: contacts.splice(0, 5)
    }
  //Delete function
    clickToDelete = (id) => {
        //Copy state to another variable
        const contactsCopy = [...this.state.contacts];
        //get the index of the movie we want to delete
        const contactsToRemoveIndex = contactsCopy.findIndex(item => {
           return item.id === id;
        });
        //remove movie from the movie copy array using the index
        contactsCopy.splice(contactsToRemoveIndex, 1);

        //set the state with the new copy of the state
        this.setState({
            contacts: contactsCopy
        });

    }

//sorting functions


    sortByName = () => {
      let movieSort = this.state.contacts;
      movieSort.sort(function(a, b){
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return movieSort;
    })

    this.setState({
      contacts: movieSort
    })
  }

  sortByPopularity = () => {
    let moviePopSort = this.state.contacts;
    moviePopSort.sort(function(a, b){
      if(a.popularity > b.popularity) { return -1; }
      if(a.popularity < b.popularity) { return 1; }
      return moviePopSort;
  })

  this.setState({
    contacts: moviePopSort
  })
}

sortById = () => {
  let movieIdSort = this.state.contacts;
  movieIdSort.sort(function(a, b){
    if(a.id > b.id) { return -1; }
    if(a.id < b.id) { return 1; }
    return movieIdSort;
})

this.setState({
  contacts: movieIdSort
})
}

//adding functions

    addRandomCeleb = () => {
      const randomIndex =  Math.floor(Math.random() * Math.floor(contacts.length-1));
      const randomCharacter = contacts[randomIndex];
      let addCeleb = this.state.contacts.concat(
              {
                name: randomCharacter.name,
                pictureUrl: randomCharacter.pictureUrl,
                popularity: randomCharacter.popularity,
                id: randomCharacter.id
              }
      )

      this.setState({
          contacts: addCeleb
      })
  }

//render functions

    render() {
      return (
        <div className="App">
        
          <table>
            <tr>
              <th>name<button onClick={this.sortByName}>Sort by Name</button></th>
              <th>picture<button onClick={this.sortById}>Sort by Id</button></th>
              <th>popularity<button onClick={this.sortByPopularity}>Sort by popularity</button></th>
            </tr>
                {this.state.contacts.map((item) => {
                    return <tr>
                           <td key={item}>{item.name}</td>
                           <td key={item}><img style={{width: '20%'}} src={item.pictureUrl} alt="hmm" /></td>
                           <td key={item}>{item.popularity}</td>
                           <button onClick={() => this.clickToDelete(item.id)}>Remove</button>
                           </tr>
                })}
            <button onClick={this.addRandomCeleb}>Add Celebrity</button>
          </table>
        </div>
      );
    }

}

export default App;
