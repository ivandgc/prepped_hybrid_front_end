import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { Route, withRouter, Redirect } from 'react-router-dom'
import RecipesContainer from './components/RecipesContainer'
import IngredientsContainer from './components/IngredientsContainer'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import UserProfile from './components/UserProfile'
import { bindActionCreators } from 'redux'
import * as UserActions from './actions/user'
import * as PlatformActions from './actions/platform'
import * as RecipeActions from './actions/recipes'
import { Splitter, SplitterSide, SplitterContent, Page, List, ListItem, Toolbar, ToolbarButton, Icon, BackButton } from 'react-onsenui'

// import Authorize from './components/Authorize'

class App extends Component {

  state = {
    openSplitter: false
  }

  componentDidMount(){
    this.props.onMounted(this.props)
  }

  requireLoggedIn = (targetLink) => {
    return localStorage.getItem('jwt') ? (
            targetLink
          ) : (
            <Redirect to="/login"/>
          )
  }

  checkLoggedIn = (targetLink) => {
    return localStorage.getItem('jwt') ? (
            <Redirect to="/"/>
          ) : (
            targetLink
          )
  }

  hide = () => {
    this.setState({ openSplitter: false})
  }

  show = () => {
    this.setState({ openSplitter: true})
  }

  changeTab = (targetURL) => {
    this.setState({ openSplitter: false})
    switch (targetURL) {
      case 'Recipes':
        this.props.history.push('/')
        break;
      case 'More Recipes (with missing ingredients)':
        this.props.history.push('/MoreRecipes')
        break;
      case 'Log Out':
        this.props.logOut()
        break;
      default:
      this.props.history.push(targetURL)
    }
  }

  render() {

    let toolbarIcon = ''
    if(localStorage.getItem('jwt')){
      toolbarIcon = <Icon icon='ion-navicon, material:md-menu' onClick={this.show}></Icon>
      if(this.props.platform.platform !== 'browser' && this.props.recipes.showRecipe){
        toolbarIcon = <BackButton material style={{color: 'black' }} onClick={this.props.closeRecipe}>Back</BackButton>
      }
    }

    return (
      <div>
          <Splitter>
            <SplitterSide id="sideNav" style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)' }}
              side='left'
              width={200}
              collapse={true}
              swipeable={false}
              isOpen={this.state.openSplitter}
              onClose={this.hide}>
              <Page>
                <List id="sideList"
                  dataSource={['Ingredients', 'Recipes', 'More Recipes (with missing ingredients)', 'Profile', 'Log Out']}
                  renderRow={(title) => (
                    <ListItem onClick={() => this.changeTab(title)} key={title} tappable>{title}</ListItem>
                  )}
                />
              </Page>
            </SplitterSide>
            <SplitterContent>
              <Toolbar id="toolbar">
                <div className="center" id="app-title" onClick={() => this.changeTab('Recipes')}>Prepped</div>
                <div className='left'>
                  <ToolbarButton>
                    {toolbarIcon}
                  </ToolbarButton>
                </div>
              </Toolbar>
              <Page>
                <Route exact path="/" render={() => this.requireLoggedIn(<RecipesContainer />)} />
                <Route path="/MoreRecipes" render={() => this.requireLoggedIn(<RecipesContainer />)} />
                <Route path="/ingredients" render={() => this.requireLoggedIn(<IngredientsContainer />)} />
                <Route path="/profile" render={() => this.requireLoggedIn(<UserProfile user={this.props.user} />)} />
                <Route path="/login" render={() => this.checkLoggedIn(<LoginForm />)} />
                <Route path="/signup" render={() => this.checkLoggedIn(<SignupForm />)} />
              </Page>
            </SplitterContent>
          </Splitter>
    </div>
    );
  }
}

function mapStateToProps(state){
  return state
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({...UserActions, ...PlatformActions, ...RecipeActions}, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
