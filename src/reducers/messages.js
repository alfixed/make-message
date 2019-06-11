import undoable, { distinctState } from 'redux-undo';

let initialState = {
    messagesHeader: ['Один', 'Два', 'Три', 'Четыре'],
    checkItems: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7'
    ],
    maxItemHeader: 3
};

const message = (state, action) => {
  switch (action.type) {
    case 'ADD_MASSAGE':
      return {
        id: action.id,
        text: action.text
      }
    default:
      return state
  }
};

const messages = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_MASSAGE':
      return [
        ...state,
        message(undefined, action)
      ]
    default:
      return state
  }
};

const undoableMessages = undoable(messages, { filter: distinctState() });

export default undoableMessages;
