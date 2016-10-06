import rootReducer from './index';

test('Reducer clears message', () => {
  const state = rootReducer(
    { example: { message: 'Example response from the API' } },
    { type: 'CLEAR_MESSAGE' });
  expect(state.example.message).toEqual(null);
});

test('Reducer updates message on successful API response', () => {
  const state = rootReducer(
    { example: { message: null } },
    {
      type: 'EXAMPLE',
      response: { message: 'Example response from the API' },
      message: 'Example response from the API',
      status: 'success',
    });
  expect(state.example.message).toEqual('Example response from the API');
});
