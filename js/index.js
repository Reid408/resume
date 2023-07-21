function setProgressValue(count) {
  let progressIdName = "";
  for (let i = 1; i < count; i++) {
    progressIdName = "progress" + i;
    document.getElementById(progressIdName).style.width =
      document.getElementById(progressIdName).innerHTML;
  }
}

setProgressValue(7);
