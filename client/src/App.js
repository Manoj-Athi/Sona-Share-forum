import { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Landing from './pages/Landing/Landing'
import { ChannelListContainer, ChannelContainer } from './pages/Home';
import 'stream-chat-react/dist/css/index.css';
import User from './pages/User/User';

const cookies = new Cookies();
const apiKey = 'e2fdqg7zekvp';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);

if(authToken) {
    client.connectUser({
        id: cookies.get('userId'),
        name: cookies.get('username'),
        fullName: cookies.get('fullName'),
        hashedPassword: cookies.get('hashedPassword'),
        phoneNumber: cookies.get('phoneNumber'),
    }, authToken)
}

function App() {

  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  if(!authToken) return <Landing />
  const customStyles = {
    '--primary-color': '#5D3FD3',
  }
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light" customStyles={customStyles}>
        <Router>
            <Route path='/' exact render={(props) => (
              <>
              <ChannelListContainer 
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                setCreateType={setCreateType}
                setIsEditing={setIsEditing}
              />
              <ChannelContainer 
                isCreating={isCreating}
                setIsCreating={setIsCreating}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                createType={createType}
              />
              </>)} />
            <Route path='/User' exact component={User}/>
        </Router>     
      </Chat>
    </div>
  );
}

export default App;
