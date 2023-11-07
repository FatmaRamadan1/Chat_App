import React from 'react';
import Styles from './home.module.css';
import Groups from '../groups/Groups';
import Explore from '../explore/Explore';
import Maincomponent from '../maincomponent/Maincomponent';

export default function Home() {
  return (
    <div className={Styles.container}>
      <Groups/>
      <Explore/>
      <Maincomponent/>
    </div>
  )
}
