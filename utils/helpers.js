module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_count: (count) => {
    // format large numbers with commas
    return parseInt(count);
  },

}