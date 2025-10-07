

const ProfilerCallBack=(
  id: string,
  phase: "mount" | "update" | "nested-update",
  actualDuration: number,
  baseDuration: number,
  startTime: number,
  commitTime: number
)=>{
  console.log({id, phase, actualDuration, baseDuration, startTime, commitTime});
}

export default {ProfilerCallBack};