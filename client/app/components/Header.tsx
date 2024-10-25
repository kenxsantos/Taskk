import { useUserContext } from "@/context/userContext";


const { user } = useUserContext();

const { name } = user;
const userId = user._id;

export function Header() {
  return <div>{userId ? `Welcome ${name}` : "Task Manager"}</div>;
}
