
function formateDate(date) {
  return new Date(date).toLocaleTimeString()
}
setInterval(formateDate)
export default formateDate