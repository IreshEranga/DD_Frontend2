import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OutletAdminNavBar from '../../components/OutletAdminNavBar';

const OutletAdminHome = () => {
  const [outletStocks, setOutletStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchOutletStocks = async () => {
      try {
        // Retrieve user details from local storage
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);

        if (!user) {
          throw new Error('User not found in local storage');
        }

        // Fetch all outlet stocks
        const response = await axios.get('http://localhost:5000/api/OutletStock');
        // Filter outlet stocks based on user.outletID
        const filteredStocks = response.data.filter(stock => stock.outletID === user.outletID);
        setOutletStocks(filteredStocks);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOutletStocks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching outlet stock: {error}</div>;
  }

  return (
    <div>
      <OutletAdminNavBar />
      <div className="container">
        
        {user && (
          <div>
           <center> <h3>Welcome, {user.name}</h3></center>
            <p>Outlet: {user.outlet}</p>
            <p>Outlet ID: {user.outletID}</p>
          </div>
        )}
        <table className="table table-striped">
          <thead>
            <tr>
              <th  style={{ width: '50px', backgroundColor:'grey', color:'white' }}>ID</th>
             
              <th  style={{ width: '50px', backgroundColor:'grey', color:'white' }}>Product ID</th>
              <th  style={{ width: '50px', backgroundColor:'grey', color:'white' }}>Stock Level</th>
            </tr>
          </thead>
          <tbody>
            {outletStocks.map((stock,index) => (
              <tr key={stock.outletStockID}>
                <td style={{ backgroundColor: index % 2 === 0 ? '#e6f2ff' : '#ffffff' }}>{stock.outletStockID}</td>
                {/* <td>{stock.outletID}</td> */}
                <td style={{ backgroundColor: index % 2 === 0 ? '#e6f2ff' : '#ffffff' }}>{stock.productID}</td>
                <td style={{ backgroundColor: index % 2 === 0 ? '#e6f2ff' : '#ffffff' }}>{stock.stockLevel}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OutletAdminHome;
