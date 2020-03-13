import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Animal,
  setAnimal,
  setName,
  setAge,
  setCreated,
  selectAnimal,
  selectName,
  selectAge,
  selectHumanYears,
  selectCreated,
} from '../store/pet/reducer';
import styles from '../styles/Pet.module.css';

export function Pet() {
  const animal = useSelector(selectAnimal);
  const name = useSelector(selectName);
  const age = useSelector(selectAge);
  const humanYears = useSelector(selectHumanYears);
  const created = useSelector(selectCreated);
  const dispatch = useDispatch();


  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          onClick={() => dispatch(setAnimal(Animal.CAT))}
        >
        Cat
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(setAnimal(Animal.DOG))}
        >
        Dog
        </button>
      </div>
      <div className={styles.row}>
        Name
        <input
          className={styles.textbox}
          aria-label="Set name"
          value={name}
          type="text"
          onChange={e => dispatch(setName(e.target.value))}
        />        
      </div>
      <div className={styles.row}>
        Age
        <input
          className={styles.textbox}
          aria-label="Set age"
          value={age}
          type="number"
          onChange={e => dispatch(setAge(Number(e.target.value)))}
        />
      </div>
      <div className={styles.row}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(setCreated(true))}
        >
          Cool button
        </button>
        <div className={styles.row}>
          <h2></h2>
        </div>
      </div>
      { created && animal &&
        <div>
          <h3>I am a {animal.toString()}!</h3>
          <p>My name is {name}</p>
          <p>My age is {age} years</p>
          <p>My age in human years is {humanYears}</p>
        </div>
      }
    </div>
  );
}
