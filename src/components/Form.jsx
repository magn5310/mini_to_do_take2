function Form(props) {
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    props.addItem({
      task: data.get("task"),
      completed: false,
      id: Math.random(),
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="flex items-center gap-2 justify-end">
        <label htmlFor="task" className="text-xl">
          Opgave
        </label>
        <input className="border-solid border border-black" id="task" name="task" type="text" required />
        <button className="bg-slate-500 p-3 rounded text-white ml-2">Tilføj</button>
      </form>
    </div>
  );
}

export default Form;
