import { useState, useEffect } from 'react'
import { createClient } from 'contentful'

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE,
  // environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
  accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
})

// custom hook
export default (contentType: string) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { items } = await client.getEntries({
          'content_type': contentType,
          include: 4 // 1 (default)
        });

        setData(items[0].fields);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data };
};