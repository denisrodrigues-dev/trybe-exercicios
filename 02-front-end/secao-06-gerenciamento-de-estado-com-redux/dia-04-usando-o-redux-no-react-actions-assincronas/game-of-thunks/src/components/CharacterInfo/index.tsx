import { useSelector } from 'react-redux';
import { GlobalState } from '../../type';
import style from './style.module.css';

export default function CharacterInfo() {
  const characterData = useSelector((
    state: GlobalState,
  ) => state.characterData.character);

  const errorMessage = useSelector((
    state: GlobalState,
  ) => state.characterData.errorMessage);

  const { name, titles, aliases } = characterData;
  console.log(errorMessage);

  return (
    <main className={ style.mainContainer }>
      {errorMessage ? (
        <h2>{errorMessage}</h2>
      ) : (
        characterData.name && (
          <section className={ style.sectionInfo }>
            <h3>{`Nome: ${name}`}</h3>
            <h3>Títulos:</h3>
            <ul>
              {titles.map((title, index) => (
                <li key={ index }>{title}</li>
              ))}
            </ul>
            <h3>Apelidos:</h3>
            <ul>
              {aliases.map((alias, index) => (
                <li key={ index }>{alias}</li>
              ))}
            </ul>
          </section>
        )
      )}
    </main>
  );
}
