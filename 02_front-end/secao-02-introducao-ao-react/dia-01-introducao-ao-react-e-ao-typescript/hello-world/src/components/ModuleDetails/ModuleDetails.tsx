function ModuleDetails() {
  const modules = ['fundamentos', 'front-end', 'back-end', 'ciência-da-computação'];

  return (
    <>
      {modules.map((module, index) => <p key={ index }>{module}</p>)}
    </>
  );
}

export default ModuleDetails;
