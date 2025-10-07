import React, { useState } from 'react';
import ModelPortal from './ModelPortal';

const PortalDisplay: React.FC = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      {open && (
        <ModelPortal>
          <div className="modal-content">
            <h2>Hello from Portal!</h2>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </ModelPortal>
      )}
    </>
  );
};

export default PortalDisplay;