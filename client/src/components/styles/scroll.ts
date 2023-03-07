export const scroll = {
  '&::-webkit-scrollbar': {
    width: '7px',
    height: '0px' /* width of the entire scrollbar */,
  },

  '&::-webkit-scrollbar-track': {
    background: 'transparent' /* color of the tracking area */,
  },

  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'rgb(207, 207, 207)' /* color of the scroll thumb */,
    borderRadius: '3px' /*roundness of the scroll thumb */,
    border: '3px solid transparent' /* creates padding around scroll thumb */,
  },
};
