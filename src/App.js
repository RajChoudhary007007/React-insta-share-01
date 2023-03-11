import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'

import NotFound from './components/NotFound'
import Home from './components/Home'
import LoginForm from './components/LoginForm'

import SearchContext from './SearchContext'

class App extends Component {
  state = {
    isDark: false,
    searchInput: '',
    searchPostView: false,
  }

  onChangeTheme = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  changeSearch = result => {
    this.setState({searchInput: result})
  }

  enterSearch = () => {
    this.setState(prevState => ({
      searchPostView: !prevState.searchPostView,
    }))
  }

  render() {
    const {isDark, searchInput, searchPostView} = this.state

    return (
      <SearchContext.Provider
        value={{
          isDark,
          searchInput,
          searchPostView,
          changeSearchInput: this.changeSearch,
          enterSearchButton: this.enterSearch,
          changeTheme: this.onChangeTheme,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </SearchContext.Provider>
    )
  }
}

export default App
