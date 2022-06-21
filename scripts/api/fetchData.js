const fetchData = async (url) => {
  if (!url) {
    console.log('Url is missed');
    return;
  }

  try {
    const response = await fetch(url);

    // console.log(response)
    
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    // console.log('data',data);

    
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData;
