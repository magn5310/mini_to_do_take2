import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([
    {
      task: "Malke Katten",
      completed: false,
      id: 1,
    },
    {
      task: "fodre Katten",
      completed: true,
      id: 2,
    },
  ]);
  function addItem(newItem) {
    setItems((oldState) => oldState.concat(newItem));
  }
  function deleteItem(id) {
    console.log(id, "Skal slettes");
    setItems((old) => old.filter((item) => item.id !== id));
  }
  function toggleCompleted(id) {
    console.log(id, "skal toggles");
    setItems((old) => {
      return old.map((item) => {
        if (item.id === id) {
          const copy = { ...item };
          copy.completed = !copy.completed;
          return copy;
        }
        return item;
      });
    });
  }
  return (
    <main className="bg-blue-100 h-full min-h-screen p-48">
      <Form addItem={addItem}></Form>
      <List toggleCompleted={toggleCompleted} deleteItem={deleteItem} items={items}></List>
    </main>
  );
}

export default App;
