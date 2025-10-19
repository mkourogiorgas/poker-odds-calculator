import { useState } from 'react';

const useAsyncAction = <T>(asyncFn: () => Promise<T>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const run = async () => {
    setIsLoading(true);
    setError('');
    try {
      const result = await asyncFn();
      setIsLoading(false);
      return result;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Something went wrong.';
      setError(message);
      setIsLoading(false);
      return undefined;
    }
  };

  const clearError = () => setError('');

  return { isLoading, error, run, clearError };
};

export default useAsyncAction;
