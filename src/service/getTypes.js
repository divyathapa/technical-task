export const getTypes = () =>
  Promise.resolve([
    { id: 0, name: "Standard" },
    { id: 1, name: "Non-Standard" },
  ]);
