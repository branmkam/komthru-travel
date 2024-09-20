export function popnum(num: number) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + " million";
    } else {
      let n = (Math.floor(num / 100) * 100).toFixed(0);
      return (
        //add comma
        n.substring(0, n.length - 3) + "," + n.substring(n.length - 3, n.length)
      );
    }
  }