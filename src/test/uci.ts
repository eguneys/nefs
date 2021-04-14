import { it, pqed } from 'tiqed';

import * as nt from '../types';
import { str2uci } from '../uci';

export default function () {
  
  it('uci', () => {

    pqed('promotion', str2uci('e2e5=Q'), { orig: [4, 2], dest: [4, 5], promotion: 'q' });
    pqed('promotion san2', str2uci(' g  x h1 =Q  '), { promotion: 'q' });
    
    
  });

}
