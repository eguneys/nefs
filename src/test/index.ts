import { tMo, run } from 'tiqed';
import fen from './fen';
import pos from './pos';


export default function() {

  tMo(fen);
  tMo(pos);

  run();

}
