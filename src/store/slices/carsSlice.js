import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      // Assumpttion:
      // action.payload ==> {name, cost}
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
        // nanoid function from Redux toolkit to ginrate an id.
      });
    },
    removeCar(state, action) {
      // Assumpttion:
      // action.payload ==> the id of car we want to remove
      const updatedCars = state.cars.filter((car) => car.id !== action.payload);
      state.cars = updatedCars;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
