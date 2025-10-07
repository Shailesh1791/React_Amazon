import React from 'react';
import ReactDOM from "react-dom";

type Props = {
  children: React.ReactNode;
};

const ModelPortal:React.FC<Props>=({ children })=>{

    const portalRoot=document.getElementById("portal-root");

    if (!portalRoot) return null;

    return ReactDOM.createPortal(
        <div className="modal">{children}</div>,
        portalRoot
    );
};

export default ModelPortal;