import { horizons } from '../../../test/shk';

export default (req, res) => {
  res.status(200).json(horizons)
}