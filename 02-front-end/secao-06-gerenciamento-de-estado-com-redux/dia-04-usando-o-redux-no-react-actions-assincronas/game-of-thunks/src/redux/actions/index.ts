import { CharacterType, Dispatch } from '../../type';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestSuccessful = (character: CharacterType) => ({
  type: REQUEST_SUCCESSFUL,
  payload: character,
});

const requestFailed = (error: string) => ({
  type: REQUEST_FAILED,
  payload: error,
});

export const fetchCharacter = (characterName: string) => {
  const API_URL = `https://anapioficeandfire.com/api/characters?name=${characterName}`;
  return async (dispatch: Dispatch) => {
    try {
      dispatch(requestStarted());
      const result = await fetch(API_URL);
      const data = await result.json();
      const [character] = data;
      if (!character) throw new Error('Personagem não encontrado!');
      console.log(character);
      dispatch(requestSuccessful(character));
    } catch (error: any) {
      dispatch(requestFailed(error.message));
    }
  };
};
