import * as nt from './types';
import * as pi from './piece';
import { poss } from './db';

export function fen(board: nt.Board): string {
  let res = [];
  for (let rank of nt.rdirections) {
    let rankS = '';
    let space = 0;
    for (let file of nt.directions) {
      let piece = board.get(poss.pget(file, rank));
      if (piece) {
        if (space !== 0) {
          rankS += space;
          space = 0;
        }
        rankS += pi.fen(piece);
      } else {
        space++;
      }
    }
    if (space !== 0) {
      rankS += space;
    }
    res.push(rankS);
  }
  return res.join('/');
}
