const getDataFromLS = () => {
  const data = localStorage.getItem("descriptions");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default getDataFromLS;
