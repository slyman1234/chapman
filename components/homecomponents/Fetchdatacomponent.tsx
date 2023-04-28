import axios from "axios";

async function fetchData(): Promise<[]> {
  const headers = {
    Authorization: "Bearer veaxLaEE5uG57slAMSBA-Rc3",
  };
  try {
    const response = await axios.get("https://spinitron.com/api/shows/", {
      headers,
    });

    return response.data;
  } catch (error) {

    console.log(error)

  }
}

export default fetchData;
