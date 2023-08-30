import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCharacter } from '../../redux/actions';
import { Dispatch } from '../../type';
import style from './style.module.css';

export default function InputSearch() {
  const [nameCharacter, setNameCharacter] = useState<string>('');
  const dispatch:Dispatch = useDispatch();

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setNameCharacter(value);
  };

  return (
    <section className={ style.sectionInput }>
      <input
        type="text"
        name="name"
        placeholder="Nome do personagem"
        onChange={ (event) => handleChange(event) }
      />
      <button
        onClick={ () => dispatch(fetchCharacter(nameCharacter)) }
      >
        Buscar
      </button>
    </section>
  );
}
