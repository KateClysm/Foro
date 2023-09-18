import React, { useEffect, useState } from 'react';
import './aside-right.scss';
import Communities from './communities/Communities';
import { ICommunity } from '../../models/ICommunity';
import { makeRequest } from '../../axios';

const AsideRight: React.FC = () => {

  const [communities, setCommunities] = useState<ICommunity[]>([]);

  const fetchCommunities = async () => {
    try {
      const res = await makeRequest.get('/communities');
      const responseData = res.data.data; // Accede a responseData.data

      if (Array.isArray(responseData) && responseData.every(item => typeof item === 'object')) {
        setCommunities(responseData);
      }
    } catch (err) {
      console.log(err);
    }
  }; 

  useEffect(() => {
    fetchCommunities();
  }, []); // Agrega un arreglo de dependencias vacío

  return (
    <div className="container-asideright">
      <Communities communities={communities} />
    </div>
  );
};

export default AsideRight;