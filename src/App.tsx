import './App.css'
import { UserCard } from './components/UserCard';

const user = {
  id: 1,
  name: "ぽこ",
  email: "1234@aaa.com",
  address: "ADDRESS",
}

export default function App() {
  return (
    <div className='App'>
      <UserCard  user={user}/>
    </div>
  );
}