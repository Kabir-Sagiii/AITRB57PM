export const startTimer = (
  timer,
  setTimer,
  timerId,
  h2Ref,
  startBtnRef,
  stopBtnRef
) => {
  h2Ref.current.style.color = "green";
  startBtnRef.current.disabled = true;
  stopBtnRef.current.disabled = false;
  timerId.current = setInterval(() => {
    setTimer((timer) => timer + 1);
  }, 1000);
};
