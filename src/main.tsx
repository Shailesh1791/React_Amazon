import { StrictMode, Profiler } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Provider from './hooks/provider';
import { BrowserRouter } from "react-router-dom";
import ApplicationRoute from "./routes"

const profilerCallBack = (
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
) => {
  console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profiler id="profiler" onRender={profilerCallBack}>
      <Provider data={{}}>
        <BrowserRouter>
          <ApplicationRoute />
        </BrowserRouter>
      </Provider>
    </Profiler>
  </StrictMode>,
)
