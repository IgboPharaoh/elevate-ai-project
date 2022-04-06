import { useEffect, useState } from "react";

interface Props {
  input: string;
}

const Requests = ({ input }: Props) => {
  const [data, setData] = useState<{}>({});
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((result) => {
          setData(result);
        });
    };
    fetchData();
  }, [input]);
  return { data };
};

export default Requests;
