import { expect } from 'chai';
import { formatTitle, stripHTML } from './util';

describe('Util.js', function () {
  describe('formatTitle()', function () {
    const tests = [
      {arg: "cold-brew-title", expected: "Cold Brew Title"},
      {arg: "another-title", expected: "Another Title"},
      {arg: "very-long-long-title", expected: "Very Long Long Title"},
      {arg: "very-very-long-long-long-long-title", expected: "Very Very Long Long Long Long Title"},
      {arg: "title-with-a-lowercase", expected: "Title With A Lowercase"},
      {arg: "number-6", expected: "Number 6"},
      {arg: "1-more-number", expected: "1 More Number"},
      {arg: "another-3-title", expected: "Another 3 Title"},
      {arg: "sansdashes", expected: "Sansdashes"},
      {arg: "-weird-title", expected: "Weird Title"},
      {arg: "another-weird-", expected: "Another Weird"},
      {arg: " title-with-spaces     ", expected: "Title With Spaces"}
    ];

    it('Should return a string', function () {
      expect(formatTitle(tests[0].arg)).to.be.a('string');
    });

    tests.forEach((test, i) => {
      const { arg, expected } = test;
      it(`The string ${arg} should become: ${expected}`, function () {
        expect(formatTitle(arg)).to.equal(expected);
      });
    });
  });
});
