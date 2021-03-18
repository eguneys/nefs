import { it, qed } from 'tiqed';

import * as nt from '../types';
import * as f from '../fen';

export default function () {
  
  it('fen', () => {

    let _sit = f.situation(nt.initialFen);
    if (!_sit) {
      return '! situation';
    }

    qed('is transitive', f.fen(_sit), nt.initialFen);
    
  });

}
