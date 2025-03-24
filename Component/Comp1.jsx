import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Comp1() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch 10 cat images from The Cat API
    axios.get("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(res => {
        setCats(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const list = cats.map(cat => (
    <tr key={cat.id}>
      <td>
        <img src={cat.url} alt="Cat" width="200" />
      </td>
    </tr>
  ));

  return (
    <div>
      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Cat Image</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
}

export default Comp1;
