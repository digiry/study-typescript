import { expect } from 'chai';

function sum(x: number, y: number): number {
  return x + y;
}

describe('index.ts 테스트', () => {
  it('sum 테스트', () => {
    expect(sum(1, 1)).to.equal(2);
    expect(sum(1, 1)).to.not.equal('귀요미');
  });
});

describe('tuple test', () => {
  it('access tuple data', () => {
    const address: [string, number] = ['gangnam', 100];
    expect(address[0]).to.equal('gangnam');
    expect(address[1]).to.equal(100);
  });
});

describe('ts object test', () => {
  it('access property of person object', () => {
    const person: { name: string; age: number } = {
      name: 'capt',
      age: 100,
    };

    expect(person.name).to.equal('capt');
    expect(person.age).to.equal(100);
  });

  it('fail to access invalid property of person object', () => {
    const person: { name: string; age: number } = {
      name: 'capt',
      age: 100,
    };
    expect({ fullname: 'capt park' }).to.not.include(person);
  });
});

describe('ts boolean test', () => {
  it('access boolean', () => {
    const show = true;

    expect(show).to.be.true;
  });
});
