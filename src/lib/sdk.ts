/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from '../client';
import { MovieService } from '../services';
import { applyMixins } from '../utils';

class SDK extends Base {}
interface SDK extends MovieService {}

applyMixins(SDK, [MovieService]);

export default SDK;