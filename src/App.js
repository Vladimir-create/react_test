import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/api';
import Filter from './components/Filter';
import ProductList from './components/ProductList';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import './index.css';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchProducts(currentPage, searchTerm, filterType)
      .then((response) => {
        setProducts(response.data.clothing_items);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [currentPage, searchTerm, filterType]);

  const handlePageChange = (page) => setCurrentPage(page);
  const handleSearch = (term) => {
    setCurrentPage(1); // Reset to first page when search term changes
    setSearchTerm(term);
  };
  const handleFilter = (type) => {
    setCurrentPage(1); // Reset to first page when filter type changes
    setFilterType(type);
  };

  return (
    <div className="App">
      <h1>Clothing Store</h1>
      <SearchBar onSearch={handleSearch} />
      <Filter onFilter={handleFilter} />
      {loading ? <p>Loading...</p> : <ProductList products={products} />}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
}

export default App;