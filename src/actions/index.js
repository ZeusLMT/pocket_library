export const addToSavedList = (store, book) => {
  store.setState({savedList: [...store.state.savedList, book]})
};

export const addToReadingList = (store, book) => {
  store.setState({readingList: [...store.state.readingList, book]})
};

export const removeFavoriteCategory = (store, removingCategory) => {
  const favoriteCategories = store.state.favoriteCategories.filter(function(category) {
    return category.id !== removingCategory.id
  });
  store.setState({favoriteCategories});
};

export const addFavoriteCategory = (store, category) => {
  store.setState({favoriteCategories: [...store.state.favoriteCategories, category]})
};

export const removeSavedBook = (store, removingBook) => {
  const savedList = store.state.savedList.filter(function(book) {
    return book.id !== removingBook.id
  });
  store.setState({savedList});
};

export const removeReadingBook = (store, removingBook) => {
  const readingList = store.state.readingList.filter(function(book) {
    return book.id !== removingBook.id
  });
  store.setState({readingList});
};