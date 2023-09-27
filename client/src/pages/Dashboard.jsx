import React, {useEffect} from 'react';
import axios from 'axios';
import Layout from '../components/Layout.jsx';

function Dashboard() {
        const getData = async()=>{
            try {
                const response = await axios.post('/api/user/get-user-info-by-id', {},
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.log(error)
            };
        };
    useEffect(()=>{
        getData();
    }, []);
  return (
    <Layout>
        <h2>content</h2>
    </Layout>
  )
};

export default Dashboard