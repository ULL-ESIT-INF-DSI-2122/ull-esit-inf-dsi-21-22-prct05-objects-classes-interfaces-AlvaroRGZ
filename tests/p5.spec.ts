import 'mocha';
import {expect} from 'chai';
import {a} from '../src/p5';

describe('a', () => {
  it('a', () => {
    expect(a()).to.be.eql(1);
  });
});