const Hello = (props) => {
  const nama = "Ahmad Ihsanullah Rabbani";
  const jurusan = "Informatict";
  // jsx => write html in javascript
  return (
    <div>
      <h1>Halo {props.nama ?? nama}</h1>
      <p>Jurusan {props.jurusan ?? jurusan}</p>
    </div>
  );
};

export default Hello;
