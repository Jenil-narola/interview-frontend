import logo from './logo.svg';
import './App.css';
import Product from './components/Product/Product';
import './components/Product/Product.css';
import { useEffect, useState } from 'react';

function App () {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost/api/v1/products/get-view-count?limit=5&currency=CAD");
      if (!response.status === 200) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      setLoading(false);
      setProducts(data.data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className='product-grid'>

        {products && products.length > 0 && products.map((product) => {

          console.log(product);


          return (
            <Product image="https://images.rawpixel.com/image_png_social_square/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L3Jhd3BpeGVsX29mZmljZV8yOF9mZW1hbGVfbWluaW1hbF9yb2JvdF9mYWNlX29uX2RhcmtfYmFja2dyb3VuZF81ZDM3YjhlNy04MjRkLTQ0NWUtYjZjYy1hZmJkMDI3ZTE1NmYucG5n.png" title={product.name} price={product.price} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
