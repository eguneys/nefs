import { tMo, run } from 'tiqed';
import fen from './fen';
import pos from './pos';
import san from './san';

export default function() {

  tMo(fen);
  tMo(pos);
  tMo.only(san);

  run();

}
