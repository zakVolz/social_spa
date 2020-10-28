import React from 'react';
import FriendsBox from './FriendsBox/FriendsBox';
import Nav from './Nav';

const NavContainer = (props) => {
  const renderFriends = props.state.map(el => <FriendsBox id={el.id} avatar={el.avatar} name={el.name} key={el.id} />);
  return <Nav renderFriends={renderFriends} />
}

export default NavContainer;
