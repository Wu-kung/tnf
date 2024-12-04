import { expect } from 'vitest';
import { E2EContext } from '../../types';

export function run(context: E2EContext) {
  return expect(context.content).includes('Hello');
}