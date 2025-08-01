import  { useEffect } from 'react';



const useTitle = (title) => {
  useEffect(() => {
    document.title = `EzInvo Billing - ${title}`;
  }, [title]);
};

export default useTitle;