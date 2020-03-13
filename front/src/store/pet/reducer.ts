import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../index';

export enum Animal{
  DOG = "Dog",
  CAT = "Cat"
}

export interface Pet {
  animal: Animal | null;
  name: string;
  age: number;
  humanYears: number;
  created: boolean;
}

const initialState: Pet = {
  animal: null,
  name: "",
  age: 0,
  humanYears: 0,
  created: false,
};

export const slice = createSlice({
  name: 'pet',
  initialState,
  reducers: {
    setAnimal: (state, action: PayloadAction<Animal>) => {
      state.animal = action.payload;
      state.humanYears = getHumanYears(state, state.age);
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
      state.humanYears = getHumanYears(state, action.payload);
    },
    setCreated: (state, action: PayloadAction<boolean>) => {
      state.created = action.payload;
    }
  },
});

const catYear = 4;
const dogYear = 7;

const getHumanYears = (state: Pet, years: number) => {
  switch(state.animal) {
    case Animal.CAT:
      console.log("meow");
      return years * catYear;
    case Animal.DOG:
      console.log("woof woof");
      return years * dogYear;
  }
  return 0;
};

export const { setAnimal, setAge, setName, setCreated } = slice.actions;
export const selectAnimal = (state: RootState) =>state.pet.animal;
export const selectName = (state: RootState) =>state.pet.name;
export const selectAge = (state: RootState) =>state.pet.age;
export const selectHumanYears = (state: RootState) =>state.pet.humanYears;
export const selectCreated = (state: RootState) =>state.pet.created;
export default slice.reducer;
