import ListItem from "./ListItem";

function List({ items, deleteItem, toggleCompleted }) {
  return (
    <div className="grid gap-5">
      <h2 className="text-xl font-bold">Min todo liste</h2>
      <div>
        <h3 className="text-xl font-bold">Mine opgaver</h3>
        <ul className="grid gap-1 bg-blue-800 p-1">
          {items
            .filter((i) => !i.completed)
            .map((item) => (
              <ListItem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item}></ListItem>
            ))}
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-bold">Færdige opgaver</h3>
        <ul className="grid gap-1 bg-blue-800 p-1">
          {items
            .filter((i) => i.completed)
            .map((item) => (
              <ListItem toggleCompleted={toggleCompleted} deleteItem={deleteItem} key={item.id} {...item}></ListItem>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
