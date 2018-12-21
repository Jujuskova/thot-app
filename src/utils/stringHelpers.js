module.exports = {
  truncateString: (string, length) => {
    if(string.length > length){
      return (string.substring(0,length) + " ...")
    }
    return string
  }
}