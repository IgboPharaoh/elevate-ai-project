import { useEffect, useState } from "react";
import { dataI } from "../../model";

interface Props {
  input?: string;
}

const Requests = ({ input }: Props) => {
  const [dataObj, setDataOdataObj] = useState<dataI[]>([]);
  const fetchDataOdataObj = async (
    input: string | undefined,
    pageSize: number = 0
  ) => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_API_KEY}&q=${input}&limit=10&offset=${pageSize}&rating=g&lang=en`
    )
      .then((response) => response.json())
      .then((result) => {
        setDataOdataObj([...dataObj, ...result.data]);
      });
  };

  useEffect(() => {
    fetchDataOdataObj(input);
  }, [input]);

  return { dataObj, fetchDataOdataObj };
};

export default Requests;
