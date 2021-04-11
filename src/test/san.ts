import { it, pqed } from 'tiqed';

import * as nt from '../types';
import { str2meta } from '../san';

export default function () {
  
  it('san', () => {

    pqed('promotion', str2meta('gxh1=Q'), { promotion: 'q' });
    pqed('promotion san2', str2meta(' g  x h1 =Q  '), { promotion: 'q' });
    
    
  });

}
