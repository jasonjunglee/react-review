import { ON_INPUT_CHANGE,
         ON_ADD_EXPENSE,
         ON_SEARCH_FILTER_CHANGE,
         ON_DELETE_EXPENSE,
         ON_SORT_CHANGE } from './actions';

export const setInputValue = inputValue => ({
    type: ON_INPUT_CHANGE,
    payload: inputValue
  }
);

export const addExpense = inputExpense => ({
    type: ON_ADD_EXPENSE,
    payload: inputExpense
  }
);

export const setSearchFilterValue = searchFilterInputValue => ({
  type: ON_SEARCH_FILTER_CHANGE,
  payload: searchFilterInputValue
});

export const deleteExpense = expenseId => ({
  type: ON_DELETE_EXPENSE,
  payload: expenseId
});

export const sortExpensesBy = sortInput => ({
  type: ON_SORT_CHANGE,
  payload: sortInput
});