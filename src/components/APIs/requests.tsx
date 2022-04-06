import { useEffect, useState } from "react";

interface Props {
  input: string;
}

const Requests = ({ input }: Props) => {
  const [dataObj, setDataOdataObj] = useState<{
    data: {
      images: { original: { url: string } };
      title: string;
      id: string | number;
    }[];
  }>();

  useEffect(() => {
    const fetchDataOdataObj = async () => {
      fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${input}&limit=25&offset=0&rating=g&lang=en`
      )
        .then((response) => response.json())
        .then((result) => {
          setDataOdataObj(result);
        });
    };
    fetchDataOdataObj();
  }, [input]);
  return { dataObj };
};

export default Requests;
