export const ADD_TO_WIDGETS = 'ADD_TO_WIDGETS';

export function addToWidgets(widgets) {
  return {
    type: ADD_TO_WIDGETS,
    widgets,
  };
}
