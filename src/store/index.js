import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from '../actions';
import Category from "../models/category";

const initialState = {
  bookList: [],
  categories: [
    new Category(`New Arrivals`),
    new Category(`Science Fiction`),
    new Category(`Fantasy`),
    new Category(`Romance`),
    new Category(`Biography`),
    new Category(`Horror`),
    new Category(`Adventure`),
    new Category(`History`),
    new Category(`Comic`)
  ],
  favoriteCategories: [],
  readingList: [],
  savedList: []
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;