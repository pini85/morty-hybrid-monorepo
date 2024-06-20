import { useState, useEffect } from "react";

/**
 * A custom hook that debounces a value by a specified delay.
 *
 * This hook is useful for delaying the update of a value until after a specified delay time
 * has passed since the last time it was updated. This is commonly used for optimizing
 * performance in scenarios such as search input fields, where you want to wait for the user
 * to stop typing before sending an API request.
 *
 * @template T - The type of the debounced value.
 * @param {T} value - The value to be debounced.
 * @param {number} delay - The delay in milliseconds to debounce the value.
 * @returns {T} - The debounced value.
 *
 * @example
 * // Usage in a component
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * useEffect(() => {
 *   if (debouncedSearchTerm) {
 *      //Perform API call or other side effect with debouncedSearchTerm
 *   }
 * }, [debouncedSearchTerm]);
 */
const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
