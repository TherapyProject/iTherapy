
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react';

import { db } from '../backend/firebase';

const BlogsContext = createContext();

export function BlogsProvider({ children }) {

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = db
      .collection('blogs')
      .orderBy('createdAt')
      .onSnapshot((snapshot) => {
        setBlogs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(false);
      });

    return unsubscribe;
  }, []);

  const value = useMemo(
    () => ({
      blogs,
      loading,
    }),
    [blogs, loading]
  );

  return <BlogsContext.Provider value={value}>{children}</BlogsContext.Provider>;
}

export function useBlogs() {
  const context = useContext(BlogsContext);
  if (context === undefined) {
    throw new Error('useBlogs must be used within a BlogsProvider');
  }
  return context;
}
