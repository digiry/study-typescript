import { expect } from 'chai';

interface User3 {
  age: number;
  name: string;
}

function getUsername(user: User3) {
  return user.name;
}

describe('test interface', () => {
  it('access object created by interface', () => {
    const sampleUser: User3 = {
      age: 30,
      name: 'kyujin.kang',
    };

    // const sampleUser2: any = {
    //   name: 'no age',
    // };

    // expect(getUsername(sampleUser2)).to.throw(TypeError, "argument type mismatched");
    expect(getUsername(sampleUser)).to.equal('kyujin.kang');
  });
});
