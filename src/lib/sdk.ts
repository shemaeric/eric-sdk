/* eslint-disable @typescript-eslint/no-empty-interface */
import { Base } from '../client';
import { MovieService } from '../services';
import { applyMixins } from '../utils';

/**
 * SDK class representing our SDK.
 * Extends the Base class which handles API requests.
 * Implements the MovieService interface for movie-related functionality.
 */
class SDK extends Base {}
interface SDK extends MovieService {}

// Apply the MovieService methods to the SDK class using mixins.
applyMixins(SDK, [MovieService]);

export default SDK;