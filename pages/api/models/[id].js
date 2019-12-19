import { horizons } from '../../../test/shk';

export default ({ query }, res) => {
  const filtered = horizons.filter(h => h.name.toLowerCase() === query.id);
  console.log(query.id);
  console.log(filtered);

  // if (filtered.length <= 0) {
  //   res.status(404).json({ message: `Model name: ${id} not found.`});
  //   return false;
  
  res.status(200).json(filtered[0]);
}