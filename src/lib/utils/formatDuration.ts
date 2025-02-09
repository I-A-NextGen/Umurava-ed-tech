export const formatDuration = (duration: string) => {
  const unit = duration.slice(-1);
  let value = parseInt(duration.slice(0, -1), 10);

  let formattedDuration = "";

  switch (unit) {
    case "d":
      formattedDuration = value + (value > 1 ? " Days" : " Day");
      break;
    case "w":
      formattedDuration = value + (value > 1 ? " Weeks" : " Week");
      break;
    case "h":
      formattedDuration = value + (value > 1 ? " Hours" : " Hour");
      break;
  }
  return formattedDuration;
};