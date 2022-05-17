import { atom } from 'recoil';

export const HuboChangeModalIsOpen = atom({
  key: 'HuboChangeModalIsOpenAtom',
  default: false,
});

export const HuboVSModalIsOpen = atom({
  key: 'HuboVSModalIsOpenAtom',
  default: false,
});

export const HuboVSHubo1Hubo2 = atom({
  key: 'HuboVSHubo1Hubo2Atom',
  default: 0,
});

export const IsChangeHubo = atom({
  key: 'IsChangeHuboAtom',
  default: 0,
});
