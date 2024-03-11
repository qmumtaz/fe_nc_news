const SortDateBy = (date) => {
    const dateObject = new Date(date);

    const formattedDate = dateObject.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return formattedDate;
}


export default SortDateBy