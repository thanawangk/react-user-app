import { useState } from "react";
import { useAuthenticator } from "@aws-amplify/ui-react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

// const amplifyClient = generateClient<Schema>({
//   authMode: "userPool",
// });

function App() {
  const { signOut, user } = useAuthenticator();

  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  // function deleteTodo(id: string) {
  //   client.models.Todo.delete({ id });
  // }

  // const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   setLoading(true);

  //   try {
  //     const formData = new FormData(event.currentTarget);
  //   } catch (e) {
  //     alert(`An error occurred: ${e}`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <>
      <div>
        <h1>Hello {user?.username}</h1>
        {user?.signInDetails?.loginId}
        <button onClick={signOut}>Sign out</button>
      </div>
    </>
  );
}

export default App;
