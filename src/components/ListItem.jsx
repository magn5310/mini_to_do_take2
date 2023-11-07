function ListItem({ completed, id, task, deleteItem, toggleCompleted }) {
  return (
    <div className={"bg-blue-400 p-5"}>
      <li className={completed ? "line-through flex justify-between" : "flex justify-between"}>
        {task}
        <div>
          <button className="bg-slate-500 p-3 rounded text-white mx-2" onClick={() => toggleCompleted(id)}>
            {completed ? "Færdig" : "Ikke Færdig"}
          </button>
          <button className="bg-slate-600 p-3 rounded text-white" onClick={() => deleteItem(id)}>
            Slet
          </button>
        </div>
      </li>
    </div>
  );
}

export default ListItem;
