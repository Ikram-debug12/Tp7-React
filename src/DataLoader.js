import { useState, useEffect } from 'react';

const DataFetcher = ({ children }) => {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    
    setTimeout(() => {
      if (isMounted) {
        setItems(['Ikram', 'Zakia', 'Nour', 'Israe', 'Sarah']);
        setLoading(false);
      }
    }, 500);
    
    return () => {
      isMounted = false; // Évite les fuites mémoire
    };
  }, []);

  if (loading) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>⏳ Chargement...</div>;
  }

  return children(items);
};

export default DataFetcher;