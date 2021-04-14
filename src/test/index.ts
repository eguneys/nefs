import { tMo, run } from 'tiqed';
import fen from './fen';
import pos from './pos';
import san from './san';
import uci from './uci';

export default function() {

  tMo(fen);
  tMo(pos);
  tMo(san);

  run();

}
