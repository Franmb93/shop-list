import Form from "./components/Form";
import Logo from "./components/Logo";
import ShoppingList from "./components/ShoppingList";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="app">
      <Logo></Logo>
      <Form></Form>
      <ShoppingList></ShoppingList>
      <Statistics></Statistics>
    </div>
  );
}

export default App;
