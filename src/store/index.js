import React from 'react';
import useGlobalHook from 'use-global-hook';
import * as actions from '../actions';
import Category from "../models/category";
import Book from "../models/book";

const initialState = {
  bookList: [
    new Book("Witch Eyes", "Scott Tracey", "Fantasy", "../Covers/witch_eyes.jpg", "Braden was born with witch eyes: the ability to see the world as it truly is: a blinding explosion of memories, darkness, and magic. The power enables Braden to see through spells and lies, but at the cost of horrible pain."),
    new Book("The Farm", "Joanne Ramos", "Fantasy", "../Covers/the_farm.jpg", "Nestled in the Hudson Valley is a sumptuous retreat boasting every amenity: organic meals, private fitness trainers, daily massages—and all of it for free. In fact, you get paid big money—more than you've ever dreamed of—to spend a few seasons in this luxurious locale."),
    new Book("Immunity", "Erin Bowman", "Science Fiction", "../Covers/immunity.jpg", "They thought their nightmare was over, but Thea, Coen, and Nova’s rescue was only the beginning. After being imprisoned on a ship they thought was their ticket to safety, it’s clear that the threat they left behind isn’t as distant as they’d hoped—and this time the entire galaxy is at risk."),
    new Book("Red Queen", "Victoria Aveyard", "Science Fiction", "../Covers/red_queen.jpg", "This is a world divided by blood - red or silver. The Reds are commoners, ruled by a Silver elite in possession of god-like superpowers."),
    new Book("The Wall", "John Lanchester", "Science Fiction", "../Covers/the_wall.jpg", "Ravaged by the Change, an island nation in a time very like our own has built the Wall—an enormous concrete barrier around its entire border."),
    new Book("Wilder Girls", "Rory Power", "Horror", "../Covers/wilder_girls.jpg", "It's been eighteen months since the Raxter School for Girls was put under quarantine. Since the Tox hit and pulled Hetty's life out from under her."),
    new Book("The Marriage Clock", "Zara Raheem", "New Arrivals", "../Covers/the_marriage_clock.jpg", "In Zara Raheem's fresh, funny, smart debut, a young, Muslim-American woman is given three months to find the right husband or else her traditional Indian parents will find one for her--a novel with a universal story that everyone can relate to about the challenges of falling in love."),
    new Book("Boneshaker", "Cherie Priest", "New Arrivals", "../Covers/boneshaker.jpg", "In the early days of the Civil War, rumors of gold in the frozen Klondike brought hordes of newcomers to the Pacific Northwest. Anxious to compete, Russian prospectors commissioned inventor Leviticus Blue to create a great machine that could mine through Alaska’s ice.")
  ],
  categories: [
    new Category(`New Arrivals`),
    new Category(`Science Fiction`),
    new Category(`Romance`),
    new Category(`Fantasy`),
    new Category(`Horror`),
  ],
  favoriteCategories: [],
  readingList: [],
  savedList: []
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;