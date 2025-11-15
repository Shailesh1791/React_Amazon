import React from 'react';
import { FixedSizeList, ListChildComponentProps } from "react-window";

const items = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

const Row = ({ index, style }: ListChildComponentProps) => (
  <div style={style}>{items[index]}</div>
);


const ReactWindow = () => {

  return (
    <FixedSizeList
      height={400}
      width={300}
      itemSize={15}
      itemCount={items.length}
    >
      {Row}
    </FixedSizeList>
  )
};

export default React.memo(ReactWindow);
