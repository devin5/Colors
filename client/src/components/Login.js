import React from "react";
import {useHistory} from 'react-router-dom'
import { useLogin } from "../hooks/useLogin";

export default function Login() {
const history = useHistory()

  const [form, change, submit] = useLogin(history);

  
  return (
    <form onSubmit={submit}>
      {console.log("im form", form)}
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        name="password"
        id="password"
        value={form.password}
        onChange={change}
      />
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username"
        name="username"
        id="username"
        value={form.username}
        onChange={change}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
