import React from 'react'
import { NavLink } from 'react-router-dom'
import Styled from 'styled-components'

//  components
import TopSection from './TopSection'
import BottomSection from './BottomSection'

const Sidebar = ({ routes }) => {
  const isActiveRoute = path =>
    window.location.href.indexOf(path) > -1 ? true : false

  const overview = routes.overview.map(({ title, name, path, icon }) => (
    <NavLink to={path + name} exact key={name}>
      <Links className={isActiveRoute(path + name) ? 'activeLink' : 'navlink'}>
        <Icon>{icon}</Icon>
        {title}
      </Links>
    </NavLink>
  ))
  const manage = routes.manage.map(({ title, name, path, icon }) => (
    <NavLink to={path + name} exact key={name}>
      <Links className={isActiveRoute(path + name) ? 'activeLink' : 'navlink'}>
        <Icon>{icon}</Icon>
        {title}
      </Links>
    </NavLink>
  ))

  const account = routes.account.map(({ title, name, path, icon }) => (
    <NavLink to={path + name} exact key={name}>
      <Links className={isActiveRoute(path + name) ? 'activeLink' : 'navlink'}>
        <Icon>{icon}</Icon>
        {title}
      </Links>
    </NavLink>
  ))

  return (
    <Wrapper>
      <Container>
        <TopSection />
        <Div>
          <Inner>
            <NavItems>
              <Title>Overview</Title>
              {overview}
            </NavItems>
            <NavItems>
              <Title>Manage</Title>
              {manage}
            </NavItems>
            <NavItems>
              <Title>Account</Title>
              {account}
            </NavItems>
          </Inner>
        </Div>
        <BottomSection />
      </Container>
    </Wrapper>
  )
}

const Wrapper = Styled.div`
background-color: #01adfd;
color: white;
height: 100vh;
`

const Inner = Styled.div`
display: flex;
flex-direction: column;
`
const Div = Styled.div`
margin: 0  0  0 2em; 
flex-grow: 3;

`

const Container = Styled.div`
display: flex; 
flex-direction: column;


`

const Title = Styled.h1`
font-size: 23px;
font-weight: 400;
color: #eeeeee;
padding: 0.5em 0;
`

const Links = Styled.button`
display: flex;
align-items: center;
`
const Icon = Styled.div`
font-size: 25px;
margin-right: 15px;
`
const NavItems = Styled.div`
 display: flex;
 flex-direction: column;
 margin: 1em  0 0 0;
`

const memo = React.memo(Sidebar)
export default memo
