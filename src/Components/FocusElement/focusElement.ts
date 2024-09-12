export const handleFocus = (
  ref: any,
  e: React.KeyboardEvent<HTMLDivElement | HTMLButtonElement | HTMLInputElement>,
  name?: any
) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (name !== null && name !== "" && name !== "0.00") {
      return ref?.current?.focus();
    }
  }
};
