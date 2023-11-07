import React from 'react';
import Styles from './maincomponent.module.css';
import Hero from '../hero/Hero';
import Featured from '../featured/Featured';

export default function Maincomponent() {
  return (
    <div className={Styles.container}>
        <Hero/>
        <Featured/>
    </div>
  )
}
