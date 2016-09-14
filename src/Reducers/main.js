const main = (state = '', action) => {
  switch (action.type) {
    case 'INIT':
      console.log(222);
      return 'START!';
    case 'CHANGE_TEXT':
      console.log(111);
      return action.text;
    default:
    return state;
  }
};

export default main;
