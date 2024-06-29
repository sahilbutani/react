import React from "react";
import { selector, useRecoilValue } from "recoil";

const home = ({ charAtom }) => {
  // selector thi atom ni value get krine length return kravi.
  const charValueSelector = selector({
    key: "charValueSelector",
    get: ({ get }) => {
      const text = get(charAtom);
      return text.length;
    },
  });

  function GetCharLength() {
    return (
      <div>
        {/* useRecoilValue no use krine charValueSelector lidhu jethi value get kri shkay. */}
        <h3>{useRecoilValue(charValueSelector)}</h3>
      </div>
    );
  }

  return (
    <>
      <GetCharLength />
    </>
  );
};

export default home;
