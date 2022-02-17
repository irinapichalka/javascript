const rooms = {
  room1: [
    { name: "Jack" },
    { name: "Andrey" },
    { name: "Ann" },
    { name: "Vasyl" },
  ],
  room2: [{ name: "Dan" }],
  room3: [{ name: "Denis" }, { name: "Max" }, { name: "Alex" }],
};
const getPeople = (obj) => {
  if (Object.keys(obj).length == 0) return [];
  const roomsResidents = Object.values(obj).flat();
  let names = [];
  names = roomsResidents.map((obj) => Object.values(obj)).flat();
  return names;
};
/*const getPeople = (obj) => {
  if(Object.keys(obj).length == 0) return [];
  return Object.values(obj)
    .reduce((acc, room) => acc.concat(room), [])
    .map(({ name }) => name);;
}; */
/*getPeople(rooms);*/
console.log(getPeople(rooms));
