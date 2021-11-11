import React, {useState} from 'react'
import { useChatContext, useChannelStateContext } from 'stream-chat-react';

import './UserList.css'
import { SearchIcon } from '../../../assets';

const SearchChat = () => {
    const { client } = useChatContext();
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const { channel } = useChannelStateContext();

    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value);
        getChats(event.target.value)
    }

    // console.log(query)
    const getChats = async (text) => {
        try {
            // const filters = { members: { $in: ['kumar'] } }; 
            const channelFilters = { cid: channel.cid }; 
            const messageFilters = { text: { "$autocomplete":  text }}; 
            const page1 = await client.search( 
                channelFilters,  
                messageFilters,  
                { sort: [{ relevance: -1 }, { updated_at: 1 }, { my_custom_field: -1 }], 
                  limit: 10 }); 
            console.log(page1)
        } catch (error) {
            console.log(error)
            setQuery('')
        }
    }

    return (
        <div className="search-chat__container">
            <div className="search-chat__wrapper">
                <div className="search-chat__icon">
                    <SearchIcon color='black'/>
                </div>
                <input 
                    className="search-chat__input" 
                    placeholder="Search chat..." 
                    type="text" 
                    value={query}  
                    onChange={onSearch}
                />
            </div>
        </div>
    )
}

export default SearchChat
