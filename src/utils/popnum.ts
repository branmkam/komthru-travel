export default function popnum(num: number) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + " million";
  }
  else {
    return Math.floor(num/1000)*1000;
  }
}
