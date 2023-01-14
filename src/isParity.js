const isParity = (questionNum) => {
    const parity = questionNum % 2 === 0 ? 'yes' : 'no';
    return parity;
  };

  export default isParity;