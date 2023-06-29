import Title from '../Title/Title';
import ModuleDetails from '../ModuleDetails/ModuleDetails';

import { calculateAge } from '../../utils/age';

function HelloWorld() {
  const name = 'Dênis Rodrigues';
  const birth = '10/06/1992';
  const age = calculateAge(birth);

  return (
    <div>
      <h1>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}

export default HelloWorld;
