function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let truncateLength = maxlength - 1;
    // можно ли это решить как то по другому? 
    return str.slice(0, truncateLength) + "…";
  } else {
    return str;
  }
}
