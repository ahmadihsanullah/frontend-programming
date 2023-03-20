import Hello from "./Hello";
// create component Main
const Main = () => {
  return (
    <main>
      <Hello nama="Ahmad" jurusan="Informatics" />
      <Hello nama="Ihsanullah" jurusan="English" />
      <Hello nama="Rabbani" jurusan="Arab" />
      <Hello jurusan="Tambang" />
      <Hello />
    </main>
  );
};

export default Main;
