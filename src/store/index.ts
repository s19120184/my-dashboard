import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counters/counterSlice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import pokemonsReducer from './pokemons/pokemons';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    pokemons:pokemonsReducer  
  },
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
  //   .concat( localStorageMiddleware  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;


export const useAppDispatch: () => AppDispatch = useDispatch;//dispara acciones 
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;//escuchar las accines y como cambia el state


