import * as React from 'react';

const Logo = props => (
  <svg viewBox='0 0 1862 316' {...props}>
    <path
      fill='#005f8c'
      d='M170 14.3c-6.4 1.2-7.1 2.2-5.8 7.9l1.1 4.8h5.6c3.1 0 7.5.5 9.9 1 5.1 1.2 7.9.1 8.8-3.5.9-3.5-.2-6.7-2.9-8.6-2.8-2-10.8-2.8-16.7-1.6zM365.4 23.2c-1.7 1.8-3.6 4.1-4.3 5-1.5 2-3.8 14.1-4.6 23.8-.3 3.6-.7 7.8-.9 9.5-2.1 13.8-2.6 70.5-1.3 124.5 1.9 75.8 1.7 70.4 2.8 84.5 1.4 17.1 2.5 21 7.2 24.7 5.5 4.4 11.2 5.3 15.4 2.5 1.7-1.2 3.7-3.3 4.5-4.7 7.2-14.1 8.9-18.2 9.3-22.6.6-7.3.7-57.8 0-59.5-.3-.7-.9-10-1.5-20.4-.5-10.5-1.2-20.4-1.5-22-.7-4-1.5-46.9-1.3-68 .6-42.6.2-62.1-1.1-66.6-1.4-5.2-5.5-10.3-8.8-11.4-1.3-.3-2.3-1.1-2.3-1.6s-1.9-.9-4.3-.9c-3.6 0-4.8.6-7.3 3.2zM161.5 30.1c-8.1 1.1-12.2 3.2-13 6.8-.4 1.8-.1 4.1.7 5.8 1.2 2.5 1.8 2.8 5.8 2.6 7-.3 31.8-.3 38.5 0l6 .2.3-4.1c.5-6.2-1.7-8.1-11.3-9.8-10-1.8-20.5-2.4-27-1.5zM1667.4 34.2c-1.7 1.8-3.6 4.1-4.3 5-1.5 2-3.8 14.1-4.6 23.8-.3 3.6-.7 7.8-.9 9.5-2.1 13.8-2.6 70.5-1.3 124.5 1.9 75.8 1.7 70.4 2.8 84.5 1.4 17.1 2.5 21 7.2 24.7 5.5 4.4 11.2 5.3 15.4 2.5 1.7-1.2 3.7-3.3 4.5-4.7 7.2-14.1 8.9-18.2 9.3-22.6.6-7.3.7-57.8 0-59.5-.3-.7-.9-10-1.5-20.4-.5-10.5-1.2-20.4-1.5-22-.7-4-1.5-46.9-1.3-68 .6-42.6.2-62.1-1.1-66.6-1.4-5.2-5.5-10.3-8.8-11.4-1.3-.3-2.3-1.1-2.3-1.6s-1.9-.9-4.3-.9c-3.6 0-4.8.6-7.3 3.2zM816.3 36.9c-7.3 3.7-8.9 5.9-10 14.3-.6 4-1.1 9.8-1.2 12.8-.1 3-.6 7.1-1 9-1.1 4.3-1.1 3.9-1.7 17.9-.2 6.2-.1 11.8.4 12.5 1 1.2.9 17.6-.1 21.1-.3 1.2-.8 5.2-1.2 9-.3 3.9-.8 7.1-1 7.3-.2.2 0 1.5.5 2.8.5 1.3.6 2.6.1 2.8-.4.3-.8 3.1-.9 6.3-.1 3.2-.5 9.1-1 13.1s-.5 7.5 0 7.8c.4.3.3 1.4-.2 2.4-1.2 2.3-1.2 3.1-1.3 57-.1 52 .3 60.4 2.9 65 3.7 6.5 4.9 8 6.6 8 .9 0 1.8.5 2 1.2.6 1.8 11.5 1.3 14.7-.6 2.7-1.7 6-10.9 6.8-18.6.6-6.9.6-32.7-.1-40-.3-3-.9-10-1.5-15.5-.5-5.5-.9-15-1-21.2l-.1-11.2 7.8-9.5c4.2-5.2 8.1-9.4 8.6-9.2.6.1 1.3 1.3 1.7 2.7.3 1.3 2.3 6 4.4 10.4 2 4.4 4.4 9.4 5.2 11.2.8 1.7 1.6 3.9 1.7 4.7.1.9.8 2.2 1.4 2.8.7.7 1.2 1.7 1.2 2.3 0 .6.9 2.8 2 5s2 4.9 2 6c0 1.2.4 2.5.8 3.1.5.5 1.4 2.9 2.1 5.4.7 2.5 2.3 7 3.6 10 1.2 3 2.8 7.4 3.5 9.7.7 2.3 1.9 4.4 2.6 4.7.7.3 1.8 2.2 2.3 4.3.6 2.1 2.1 5.4 3.3 7.3 3.1 4.9 5.8 10.9 5.8 13 0 .9.9 2.5 1.9 3.4 1.1 1 2.3 3 2.6 4.5 1 4.4 5.8 10.6 8.5 10.9 1.4.2 3.2.6 4 .9 1.5.6 2.5.6 7.4.4 1.4-.1 3.8-1.3 5.5-2.7 3-2.5 3.1-2.8 3.1-11.1 0-6.9-.6-10.1-3.1-17.5-1.8-5-3.8-10.3-4.5-11.7-.8-1.4-1.4-3-1.4-3.5s-1.1-2.4-2.5-4.2c-1.4-1.8-2.5-3.9-2.5-4.6 0-.8-.7-2.3-1.5-3.4-.8-1-1.5-2.6-1.5-3.4 0-1.3-8.3-19.2-12.7-27.5-.9-1.7-2.9-5.5-4.4-8.7-1.5-3.1-3.3-5.9-3.8-6.3-.6-.3-1.1-1.8-1.1-3.2 0-1.5-.9-4.5-1.9-6.7-2.2-4.6-8.1-19.7-8.1-20.7 0-.4-1.8-3.7-4-7.3-2.2-3.6-4-6.9-4-7.4 0-.4 3.2-4.1 7-8.2 3.9-4.1 7-7.7 7-8.1 0-.5 1.8-2.7 4-5.1 2.2-2.4 4.7-5.8 5.5-7.6.9-1.7 2.2-3.2 2.9-3.2.7 0 2.9-2.4 4.9-5.3 1.9-2.8 6.3-8.1 9.6-11.7 3.4-3.6 6.1-7 6.1-7.6 0-.6.9-2.3 2.1-3.8 1.1-1.4 1.7-2.6 1.2-2.6-.4 0 0-.5 1-1.1 1-.6 2.9-3.6 4.3-6.7s3.1-6.3 3.8-7.2c2.2-2.5 3.4-9.5 2.6-14.2-2-10.3-4.5-12.4-14-11.4-3 .3-5.8.5-6.2.6-1.3 0-13 12.4-15.7 16.5-1.4 2.2-3.4 4.8-4.3 5.9-.9 1-2.4 3.4-3.3 5.3-.9 1.8-2.9 4.8-4.4 6.6-1.5 1.8-3.5 4.8-4.5 6.7-.9 1.9-3.5 6.2-5.7 9.5s-4.7 7.6-5.5 9.5c-.9 1.9-1.9 3.7-2.3 4-1.4 1.1-4.8 6.7-6.1 10-.7 1.9-1.9 4.2-2.6 5-.6.8-3.7 6.2-6.9 11.9-3.1 5.7-7.3 12.2-9.4 14.4l-3.8 4-.1-9.4c0-5.1.4-10.2 1-11.2.5-1 1-5.5 1-10s.5-8.8 1.1-9.5c.5-.6.7-1.2.4-1.2-.3 0-.1-1.7.4-3.8.5-2 1.1-8.4 1.5-14.2.4-5.8 1-11.2 1.4-12 .4-.8.6-2.9.4-4.5-.6-5-1.6-25.7-1.5-31.7 0-3.1-.4-6-.9-6.3-.6-.3-1-1.5-1-2.5 0-1.1-1.4-3.5-3-5.4-4-4.5-9.1-5.1-15.7-1.7zM1740.3 36.9c-7.3 3.7-8.9 5.9-10 14.3-.6 4-1.1 9.8-1.2 12.8-.1 3-.6 7.1-1 9-1.1 4.3-1.1 3.9-1.7 17.9-.2 6.2-.1 11.8.4 12.5 1 1.2.9 17.6-.1 21.1-.3 1.2-.8 5.2-1.2 9-.3 3.9-.8 7.1-1 7.3-.2.2 0 1.5.5 2.8.5 1.3.6 2.6.1 2.8-.4.3-.8 3.1-.9 6.3-.1 3.2-.5 9.1-1 13.1s-.5 7.5 0 7.8c.4.3.3 1.4-.2 2.4-1.2 2.3-1.2 3.1-1.3 57-.1 52 .3 60.4 2.9 65 3.7 6.5 4.9 8 6.6 8 .9 0 1.8.5 2 1.2.6 1.8 11.5 1.3 14.7-.6 2.7-1.7 6-10.9 6.8-18.6.6-6.9.6-32.7-.1-40-.3-3-.9-10-1.5-15.5-.5-5.5-.9-15-1-21.2l-.1-11.2 7.8-9.5c4.2-5.2 8.1-9.4 8.6-9.2.6.1 1.3 1.3 1.7 2.7.3 1.3 2.3 6 4.4 10.4 2 4.4 4.4 9.4 5.2 11.2.8 1.7 1.6 3.9 1.7 4.7.1.9.8 2.2 1.4 2.8.7.7 1.2 1.7 1.2 2.3 0 .6.9 2.8 2 5s2 4.9 2 6c0 1.2.4 2.5.8 3.1.5.5 1.4 2.9 2.1 5.4.7 2.5 2.3 7 3.6 10 1.2 3 2.8 7.4 3.5 9.7.7 2.3 1.9 4.4 2.6 4.7.7.3 1.8 2.2 2.3 4.3.6 2.1 2.1 5.4 3.3 7.3 3.1 4.9 5.8 10.9 5.8 13 0 .9.9 2.5 1.9 3.4 1.1 1 2.3 3 2.6 4.5 1 4.4 5.8 10.6 8.5 10.9 1.4.2 3.2.6 4 .9 1.5.6 2.5.6 7.4.4 1.4-.1 3.8-1.3 5.5-2.7 3-2.5 3.1-2.8 3.1-11.1 0-6.9-.6-10.1-3.1-17.5-1.8-5-3.8-10.3-4.5-11.7-.8-1.4-1.4-3-1.4-3.5s-1.1-2.4-2.5-4.2c-1.4-1.8-2.5-3.9-2.5-4.6 0-.8-.7-2.3-1.5-3.4-.8-1-1.5-2.6-1.5-3.4 0-1.3-8.3-19.2-12.7-27.5-.9-1.7-2.9-5.5-4.4-8.7-1.5-3.1-3.3-5.9-3.8-6.3-.6-.3-1.1-1.8-1.1-3.2 0-1.5-.9-4.5-1.9-6.7-2.2-4.6-8.1-19.7-8.1-20.7 0-.4-1.8-3.7-4-7.3-2.2-3.6-4-6.9-4-7.4 0-.4 3.2-4.1 7-8.2 3.9-4.1 7-7.7 7-8.1 0-.5 1.8-2.7 4-5.1 2.2-2.4 4.7-5.8 5.5-7.6.9-1.7 2.2-3.2 2.9-3.2.7 0 2.9-2.4 4.9-5.3 1.9-2.8 6.3-8.1 9.6-11.7 3.4-3.6 6.1-7 6.1-7.6 0-.6.9-2.3 2.1-3.8 1.1-1.4 1.7-2.6 1.2-2.6-.4 0 0-.5 1-1.1 1-.6 2.9-3.6 4.3-6.7s3.1-6.3 3.8-7.2c2.2-2.5 3.4-9.5 2.6-14.2-2-10.3-4.5-12.4-14-11.4-3 .3-5.8.5-6.2.6-1.3 0-13 12.4-15.7 16.5-1.4 2.2-3.4 4.8-4.3 5.9-.9 1-2.4 3.4-3.3 5.3-.9 1.8-2.9 4.8-4.4 6.6-1.5 1.8-3.5 4.8-4.5 6.7-.9 1.9-3.5 6.2-5.7 9.5s-4.7 7.6-5.5 9.5c-.9 1.9-1.9 3.7-2.3 4-1.4 1.1-4.8 6.7-6.1 10-.7 1.9-1.9 4.2-2.6 5-.6.8-3.7 6.2-6.9 11.9-3.1 5.7-7.3 12.2-9.4 14.4l-3.8 4-.1-9.4c0-5.1.4-10.2 1-11.2.5-1 1-5.5 1-10s.5-8.8 1.1-9.5c.5-.6.7-1.2.4-1.2-.3 0-.1-1.7.4-3.8.5-2 1.1-8.4 1.5-14.2.4-5.8 1-11.2 1.4-12 .4-.8.6-2.9.4-4.5-.6-5-1.6-25.7-1.5-31.7 0-3.1-.4-6-.9-6.3-.6-.3-1-1.5-1-2.5 0-1.1-1.4-3.5-3-5.4-4-4.5-9.1-5.1-15.7-1.7zM1463.4 47.9c-6.6 2.6-8.5 4.3-8.9 8.1-.3 1.9-.9 4.4-1.4 5.5-3.5 7.6-6.7 19.3-7.6 27.9-.4 3.3-1.5 8.1-2.6 10.8-1 2.7-1.9 6-1.9 7.3 0 1.3-.4 2.6-.9 3-.5.3-1.2 1.9-1.6 3.5-.4 1.7-1 3-1.5 3-.9 0-1.8 4.2-2.6 12.1-.3 3-1 7.2-1.6 9.4-.6 2.2-1.2 5.3-1.5 7-.2 1.6-1.1 4.7-1.8 6.8-.8 2-1.5 5.5-1.5 7.6 0 2.3-.5 4.1-1.2 4.3-.9.3-1.3 3.1-1.4 8.5-.1 4.4-.8 9.1-1.4 10.4-.7 1.3-1.4 4.6-1.5 7.4-.2 2.7-.4 5.2-.6 5.5-.1.3-.3.9-.4 1.5-.4 2.8-2.9 9.2-4.2 10.6-.8.9-1.6 2.9-1.9 4.5-.2 1.6-1 5.4-1.6 8.4-.6 3-1.2 6.4-1.3 7.5-.2 2.1-1.9 6.9-3.4 9.5-.5.9-1.2 3-1.6 4.9-.4 1.8-1.4 3.5-2.3 3.8-2.4 1-8.7-7-10.7-13.6-.9-3.1-2.6-8.1-3.6-11.2-1.1-3.1-2.4-9.4-2.9-14-1.2-9.6-2.1-13.9-6.1-26.3-1.6-4.9-2.9-9.4-2.9-10.1 0-.7-.9-2.4-2-3.8s-2.7-4.4-3.5-6.7c-2.6-7.5-9.1-13.7-15.7-15.1-3.6-.9-4.5-.6-8.6 2.1-4 2.7-10.2 10.1-10.2 12.3 0 .4-1.1 2.5-2.5 4.5s-2.5 4.3-2.5 5c0 .8-.8 2.6-1.8 4-1 1.5-2.4 4.9-3.2 7.7-2 7.8-3.3 11.9-4.5 13.5-.6.8-1.7 3.9-2.4 6.8s-2.4 7.5-3.7 10.2c-1.3 2.7-2.4 6-2.4 7.2 0 1.3-.9 4.7-2 7.6-1.1 2.9-2 6-2 7-.1.9-.7 3-1.4 4.7l-1.3 3-1.7-5.5c-.9-3-2.5-6.9-3.6-8.5-1.1-1.7-2-4-2-5.2 0-1.2-1.5-5-3.4-8.5-4.4-8.4-6.4-15.5-7-25.8-.2-4.7-1-15.5-1.7-24-.6-8.5-1.1-17.8-1-20.5.3-6.6.1-42.8-.3-58.5-.5-17.7-2.8-24.8-9.2-27.5-1.9-.8-3.4-1.9-3.4-2.4 0-1.4-5-1.4-12 .1-4.7.9-6.1 1.7-8 4.4-1.2 1.9-3.1 4.3-4.1 5.5-2.9 3.3-4.2 9.5-4 18.9.2 10.9.2 10.1 0 19.8-.1 4.5.3 8.8.9 9.5.6.6 1.2 3.2 1.5 5.7 1.7 14.7 2 17.1 2.8 17.6.5.3.7.9.4 1.4-.3.5.1 3.3 1 6.2.9 2.9 2 7.7 2.5 10.7.5 3 1.6 6.1 2.3 7 3.3 3.8 6.4 14.7 7 24.1.4 5.2.9 10.6 1.2 12 .3 1.4.7 5.3.9 8.7.3 3.4.9 7 1.4 8 1 1.8 2.7 10.1 3.6 17.8.3 2.2 1.4 9.2 2.5 15.5 1.7 9.2 2.7 12.2 5.1 15.6 2.6 3.7 2.9 4.8 2.4 8.7-.9 6.7.3 13.3 3.2 16.4 1.3 1.4 2.4 3.1 2.4 3.7 0 3.3 12 9.6 18.5 9.6 9.1 0 11.8-2.3 14.5-12.4.8-3 2.6-6.2 4.7-8.2 1.8-1.8 3.3-3.9 3.3-4.6 0-.7.7-2.2 1.5-3.2.8-1.1 1.5-2.9 1.5-4 0-1.2 1.1-4.1 2.5-6.5 1.4-2.3 2.5-5.1 2.5-6.2 0-1 1-3.7 2.2-6 1.1-2.2 2.2-5.4 2.3-7.1.2-1.6 1-3.7 1.8-4.6 1.3-1.5 4.3-8.4 5-11.8.5-2.2 6.2-13.4 6.9-13.4.8 0 2.6 8.5 3.1 15 .2 2.5 1.2 6.3 2.2 8.4 1.7 4.1 2.3 6 3.2 10.8.3 1.5 1.1 3.3 1.9 3.9.8.6 1.4 2 1.4 3s.4 2 .9 2.3c.4.3 1.1 2.3 1.5 4.4.3 2.1 1.5 4.7 2.6 5.7s2 2.6 2 3.6.4 2 .9 2.3c.4.3 1.1 2.1 1.4 4 1 5.9 5.8 14.5 10.1 17.9 2.3 1.7 6 5.1 8.2 7.6l4.2 4.4 6.6-.5c3.7-.3 7.7-1.3 9.2-2.3 2.7-1.7 5.1-6.4 6.5-12.5 1.7-7.6 4-15.6 4.8-17.1 1.5-2.7 6.8-19.2 7.5-23.4 1-5.6 3.6-13.5 4.5-13.5.4 0 .8-.6.9-1.3.2-2.6 1.4-7.2 2.1-8.2 1.9-2.3 5-14.9 5.6-22 .1-1.7 1-5.7 1.9-9 3.6-12.5 6.9-23.1 7.7-24.5 2.1-4.2 3.9-10.5 3.9-13.8 0-2.1.5-4.3 1.1-4.9.7-.7 1.3-2.6 1.4-4.3.2-1.8 1.2-5.1 2.3-7.3 2.3-4.9 6.3-16.3 6.7-19.2.4-3.3 1.7-7.9 2.5-9 1.2-1.5 3.8-12.3 4.5-18.4.3-3 .9-5.9 1.2-6.4.9-1.6.9-16.7 0-16.7-.5 0-.4-.7.3-1.5.6-.8.8-1.9.4-2.6-.4-.7-.8-3.8-.9-6.9-.3-7.1-2-10.8-6.4-13.7-3.9-2.6-5.1-2.7-10.7-.4zM160 48c-3.6.4-8.3 1.1-10.5 1.4-2.2.4-8.3 1.4-13.5 2.2-14.4 2.2-31.6 7.3-42.7 12.5-3.4 1.6-7.2 3.4-8.5 3.9-1.3.6-3.6 1.9-5.3 3-1.6 1.1-4.7 2.8-6.7 4-16.7 9.1-38.9 33.1-46 49.6-5.4 12.5-8.8 24.2-9.4 32.7-.7 9.2-.7 23.2 0 26.2.2 1.1 1.1 5.2 2 9.1 1.3 6.3 2.7 10.7 5.6 17.9 1.8 4.4 8.4 17.1 9.9 19 .9 1.1 2.7 3.6 4.1 5.5 4.7 6.9 23 26 24.8 26 .6 0 1.2.5 1.2 1 0 .6 1 1.4 2.3 1.9 1.2.5 5 3.1 8.4 5.7 7.6 6 13 9.4 14.7 9.4.8 0 1.9.7 2.6 1.5.7.8 1.8 1.5 2.4 1.5.6 0 2.9.9 5.1 1.9 8.4 4.1 13.2 6.1 14.8 6.1.9 0 1.7.4 1.7.8 0 .5 3.3 1.6 7.3 2.6 3.9 1 8.1 2.2 9.2 2.6 1.1.5 3.6 1.1 5.5 1.3 1.9.3 4.5.7 5.8 1 13.7 3.4 50.1 4.3 69.2 1.8 10.5-1.4 31.8-6.9 37.1-9.7 1.5-.8 3.4-1.4 4.2-1.4 3.9 0 33.7-17 39.3-22.4.6-.6 3.2-2.8 5.7-4.9 6.4-5.3 9-12.3 8.5-23.2-.2-6.1-.8-8.7-2.3-10.7-2.6-3.5-11.9-7.6-18.9-8.3-6.6-.7-9.2.4-16.8 7.4-10.3 9.5-16.5 13.9-26.3 18.9-9.6 4.8-27.7 11.5-34 12.5-1.6.3-4.8.9-7 1.5-9.8 2.6-40.8 3.3-53.6 1.2-10.4-1.7-23.5-4.8-29.7-7.1-2.9-1-6.1-1.9-7-1.9-5.5 0-28.7-16.4-41.8-29.5-8-8.1-12.6-15.3-17.4-27.5-3-7.6-3.4-9.9-3.8-20.7-.5-13.2.9-19.5 6.5-30.7 2.8-5.6 9.9-15.6 12-16.9.7-.4 1.3-1.3 1.4-2 0-1.5 21.1-18.1 28.8-22.7 3.8-2.3 19.8-8.6 26.1-10.4 17-4.7 37.8-6.7 56.7-5.4 29.9 2 58.1 12.5 80.8 29.8 9.8 7.5 16.9 10.6 24.8 10.9 6 .1 7.4-.2 11.3-2.6 4.9-3.1 6.8-7.3 6.6-14.8-.1-3.6-.8-4.6-7.4-10.8-8.2-7.6-23-19-29.8-22.9-9.8-5.6-22.4-11.8-23.9-11.8-.9 0-2.1-.4-2.7-.9-1.7-1.7-21.9-7.9-32.2-10-5.7-1.1-11.1-2.5-12-3-5.3-2.7-22.5-3.7-37.2-2.1z'
    />
    <path
      fill='#005f8c'
      d='M166.5 98.1c-2.1 1.1-7.5 8.2-7.5 9.9 0 .5 1 1.4 2.1 2.1 1.9 1 2.1 1.6 1.4 5.8-.4 2.5-.8 5.9-1 7.6-.2 1.6-.9 7-1.5 12-1.3 10.1-1.6 13.4-2.5 28.5-.3 5.8-.7 11.3-.8 12.4-.2 1.9 3 4.2 8.8 6.4 1.7.6 5.5 2 8.5 3.2 3 1.2 8 3 11 4.1 3 1 11.4 3.9 18.5 6.4 7.2 2.5 15.1 5.3 17.8 6.1 4.5 1.4 4.7 1.6 4.7 5.3 0 6.1 1.4 6.6 16.4 6.3 17.5-.3 20.5-.8 21.8-3.7.9-1.9.6-2.9-1.7-5.9-3-3.9-17.2-16.2-22.1-19l-3.1-1.9-3.5 3.8-3.4 3.7-5.2-1.1c-2.8-.6-7.1-1.9-9.4-3-2.4-1-5.6-2.2-7.3-2.7-1.6-.4-3.4-.8-4-1-.5-.2-2.6-.7-4.5-1.3-3.1-.8-10.1-3.1-15.5-5.1-1.1-.5-4.6-1.4-7.9-2.1-3.2-.7-6-1.8-6.3-2.5-.6-1.7-.6-7.2 0-11.9.3-2.2.6-14.5.7-27.3l.2-23.2h2.4c1.3 0 2.8-.9 3.4-1.9.8-1.6.4-2.8-2.3-6.3-3.5-4.6-5-5.3-8.2-3.7zM1155.7 116.8c-3.1 3.3-4.7 7.8-4 11.4.7 3.5 5.7 8.8 8.3 8.8 2.9 0 3.6 2.6 1.6 6.7-1.4 3-1.5 3.8-.4 4.9 1.1 1.2 2 .9 5-1.6 5.6-4.6 7.9-9.2 8.5-16.4.5-7.4-1.4-13.2-4.9-14.5-1.3-.4-4.3-1.1-6.8-1.5-4.1-.6-4.8-.4-7.3 2.2zM498.7 125.6c-.3.3-2.5.7-4.8 1-2.4.2-6 .6-8 .8-2 .2-6.2 1.8-9.4 3.5s-6.6 3.1-7.7 3.1c-1.9 0-2.5.3-8.8 3.5-4.6 2.4-14 9.5-14 10.6 0 .5-1.5 2.3-3.2 4.1-5.9 6-12 14.9-12 17.8 0 .3-.5 1.4-1.1 2.5-.6 1.1-1.2 2.2-1.2 2.5-1 3.9-1.8 6.9-2.5 8.5-1.7 4.2-4 16.3-4.6 24.5-.8 10.1-.8 8.8.1 17.5.4 3.8.7 8.3.7 10-.1 1.6.5 5.4 1.3 8.5.8 3.1 1.6 6.5 1.8 7.6 1.9 10.8 8.5 23.6 12.9 25 .9.3 2 1.3 2.3 2.3 1 3.2 15.2 15 19 15.7 1.9.3 3.5 1 3.5 1.4 0 .4 3.3 1.2 7.3 1.9 3.9.7 9.5 1.7 12.2 2.1 4.3.8 26.2 2.3 29 2.1 4.9-.4 18.9-3.1 22.5-4.4 2.5-.8 7-2.1 10-2.8 3-.7 6-1.6 6.5-1.9.6-.4 3.7-1.5 7-2.6 3.3-1 6.6-2.5 7.3-3.2.7-.6 2.3-1.2 3.4-1.2s2.9-1.1 4-2.5 2.4-2.5 3-2.5c1.8 0 14-13.3 15.5-16.7.7-1.8 1.7-3.3 2.2-3.3.8 0 3.3-7.6 3.7-11 0-.8.3-2.2.6-3 .3-.8 1.1-3.3 1.8-5.5.8-2.2 1.5-6.3 1.7-9 .4-7.3.6-8.5 1.5-8.5.7 0 .3-9.3-.7-17-.8-5.8-2.8-13-3.7-13-.4 0-.8-.8-.8-1.9 0-1-.7-2.4-1.5-3.1-.8-.7-1.5-2.2-1.5-3.4 0-1.2-1.1-4.6-2.5-7.4-1.4-2.9-2.5-5.6-2.5-6.1 0-.6-2.2-3.2-5-5.9-2.7-2.7-5-5.3-5-5.8-.1-1.4-7.3-8.9-9.3-9.7-.9-.4-2-1.5-2.4-2.4-.9-2.4-6.4-7.2-8.4-7.3-.9 0-2.2-.7-2.9-1.5-.7-.9-1.5-1.3-1.8-1.1-.2.3-1.7-.1-3.3-.9-1.5-.8-3.7-1.5-4.9-1.5-1.1 0-2-.4-2-1 0-2-8.5-6.4-13-6.7-2.5-.1-6.5-.6-9-1.2-2.5-.5-8.3-1-12.9-1-4.6-.1-8.7-.4-9.1-.6-.4-.3-1-.2-1.3.1zm32.2 32.5c1.3 1.1 2.9 1.9 3.6 1.9 3.4 0 10.3 4.2 13 8 6.8 9.3 9.8 13 10.6 13 .4 0 1.3 1.6 1.9 3.5.6 1.9 1.5 3.5 2 3.5.4 0 .8 1.5.8 3.2 0 1.8.5 4.5 1.1 6 .6 1.5 1.3 4.9 1.7 7.5.3 2.6 1.1 5.9 1.6 7.3.5 1.4.9 5.4.9 9-.1 6.2-.2 7.6-1.7 14.5-.8 3.9-6 15.1-8.7 18.8-2.7 3.6-12.4 9.7-15.4 9.7-1.2 0-2.5.4-2.8 1-.3.5-1.9 1-3.4 1s-3.2.5-3.9 1.2c-1.6 1.6-9.7 3.7-14.4 3.8-2 0-3.9.4-4.2.8-.3.5-6 .9-12.8 1-10.6.1-12.8-.1-15.8-1.8-1.9-1.1-4.7-2.5-6.2-3.2-1.6-.7-2.8-1.5-2.8-1.9 0-.4-1.1-1-2.4-1.3-1.4-.3-3.5-2.1-4.7-3.9-1.3-1.7-2.6-3.4-3-3.7-.4-.3-1.4-2.7-2.3-5.4-.9-2.6-2.1-5.8-2.7-6.9-1.7-3-3.2-39.4-1.8-40.3.5-.3.7-.9.4-1.4-1.7-2.7 8.2-23.4 14.6-30.8 1.6-1.8 2.9-3.7 2.9-4.2s2.1-2.3 4.7-4.1c4-2.8 6.3-3.5 17.1-5.1 6.9-1 12.8-2 13-2.3.3-.3 4.2-.5 8.6-.4 6.3.1 8.6.5 10.5 2zM693.4 127.8c-11.8 1.7-36.5 12.2-42.9 18.2-2.2 2.1-6.6 6.3-9.7 9.3-3.2 3-5.8 6.2-5.8 7.1 0 .8-1.1 2.3-2.5 3.2-2.5 1.6-5.9 7.7-7.1 12.9-.4 1.6-1.3 4-2.1 5.2-.8 1.2-1.6 3.6-1.8 5.3-.3 1.8-1.1 4.3-2 5.6-1.2 1.9-1.5 6.7-1.7 26.6-.2 26.5-.7 23.2 5.7 37.3.8 1.6 1.6 4.1 1.9 5.5 1 4.6 25.8 24.2 37.6 29.7 13.5 6.3 15 6.7 33 7.8 10.2.6 14.2-.3 27.6-6.6 3.3-1.6 6.8-2.9 7.8-2.9.9 0 4.9-1.6 8.9-3.6 3.9-2 9.2-4.5 11.7-5.6 2.5-1.1 5.2-2.4 6-2.9 9-5.6 13.8-9.4 15.4-12.1 1-1.8 2.9-4.4 4.1-5.8 2.4-2.7 3.8-6.7 2.5-7.5-.4-.3-.8-2-.7-3.8 0-2-.8-4.6-2.2-6.5-2-2.8-2.8-3.2-7.1-3.2-2.7 0-5.5-.3-6.3-.6-.9-.3-3.2 1.1-5.8 3.7-4.8 4.6-13.4 10.9-14.8 10.9-.5 0-1.4.6-2 1.3-2.2 2.8-11.9 3.8-38.9 4.1-29.8.4-35.1-.3-40.6-4.6-8.3-6.6-14-23.4-13.4-39.4.3-7.8.7-9.6 2.9-13 1.4-2.1 3.9-6.1 5.5-8.7 1.6-2.6 4.3-6.5 5.9-8.6 6.2-7.8 9-11.2 9.5-12 .3-.4 3.9-3.2 8-6.2 11.7-8.6 19.8-10.5 41.6-10 5 .1 6.9.7 10.8 3.2 5.6 3.7 19.5 7 27.5 6.4 5.7-.4 12.5-4.8 14.2-9.4 2.4-6.1.1-15.1-3.9-15.1-2.2 0-7.4-1.7-16-5.3-4-1.7-8.8-3.1-10.5-3.2-1.8-.1-4.5-.7-6-1.3-1.6-.7-3.7-1.2-4.8-1.2-1.1 0-2.7-.4-3.7-.9-3.5-2-28.9-4.3-35.8-3.3zM1098 143c-8.7.7-19.5 3.4-20.5 5.1-.3.5-3 1.6-6 2.4-2.9.9-5.9 2.2-6.5 3-.7.8-2.2 1.5-3.4 1.5-1.2 0-2.6.4-3.2.9-.5.5-2.5 1.8-4.5 2.9l-3.6 2-1.1-6.5c-1.5-9.2-2.9-10.8-8.8-11-2.7-.1-6.6.2-8.6.8-4.6 1.2-9.8 5.4-9.8 7.9 0 1-.5 2.2-1 2.5-.6.4-1 2.8-.9 5.3.1 2.6-.2 7.8-.6 11.7-.4 3.8-.8 14.9-.9 24.5-.1 9.6-.5 18.1-.9 18.7-.4.7-.8 3.4-.8 6 .1 10.8-.7 29.2-1.3 30.2-1.9 3-3 35.6-1.5 43.1 1.2 5.8 4.3 9.6 8.3 9.9 5.6.5 13.5.2 17.1-.5 4.9-1.1 7.5-5.5 7.5-12.9.1-2.8.7-8 1.4-11.7.7-3.7 1-7 .7-7.3-.3-.3-.4-6.8-.1-14.3.3-11.8.3-20.8.2-42.2-.1-2.5-.1-5.9 0-7.5 0-1.7-.2-4.3-.5-6-.7-4.3.8-6.7 6.4-9.8 2.7-1.6 4.9-3.2 4.9-3.7s1.5-1.4 3.4-2c1.9-.6 3.6-1.4 3.8-1.8.4-1 8.1-5.1 17.7-9.6 2.7-1.2 12.1-1.3 16.6-.1 8.3 2.3 10.9 14.1 10.6 48.5-.4 36.7-1.9 53.2-5.5 60.5-1.9 3.9-2.6 21.1-.8 20.7.7-.1 1.2.4 1.2 1.2 0 .7 1.1 2.5 2.4 3.9 2.1 2.3 2.9 2.5 8.2 2.1 10.8-.7 14.8-1.9 14-4-.3-.8-.1-1.4.4-1.4s.9-1 .8-2.3c-.1-1.3.4-3.7 1.1-5.5.7-1.7 1.1-3.7.8-4.4-.2-.7.1-2.4.8-3.8 1.5-3 3.7-15.7 3.6-20.8-.1-2.3.1-3.4 3.8-17.7 1.1-4.4 1.8-8.8 1.5-9.9-.3-1-.1-2.1.4-2.5 1-.6 2.5-14.9 2.3-21.1 0-1.4 0-3.4.1-4.5.6-13.3-.6-33.6-2.4-36.9-.6-1.1-1.2-3.4-1.4-4.9-.1-1.5-.9-3.6-1.8-4.6-.9-1-1.6-2.8-1.6-4 0-1.3-.4-2-1.1-1.6-.6.4-.9.1-.7-.6.5-2.2-5.1-8.8-9-10.6-2-1-4.4-2.5-5.4-3.5s-2.9-1.8-4.2-1.8c-1.3 0-4.3-.7-6.6-1.5s-4.8-1.4-5.4-1.4c-.6.1-4.9.5-9.6.9zM1545.3 143.2c-7.3.8-9.7 1.5-11.7 3.3-1.3 1.2-4.2 2.5-6.5 2.9-4.5.7-5.7 1.5-13.6 9.3-2.9 2.9-5.7 5.3-6.2 5.3s-1.6 1.2-2.3 2.7c-.8 1.6-2.7 3.8-4.2 5.1-1.5 1.3-2.8 3.1-2.8 4 0 .8-1 3.5-2.1 5.9-1.2 2.4-1.9 4.6-1.6 4.9.3.3-.6 2.2-1.9 4.1-1.3 2-2.4 4.1-2.4 4.8 0 .6-1.1 2.2-2.4 3.5-1.4 1.2-2.8 3.5-3.1 5.1-.4 1.5-1.2 3.3-2 3.9-2.1 1.8-3 10.8-1.2 12.8 1.3 1.5 1.3 2.3-.2 6.7-.9 2.7-2 5.6-2.5 6.4-.5.8-.4 1.6.5 2.2 1.2.8 1.2 1.1-.1 1.9-1.3.8-1.3 1.3.1 3.9 1.3 2.1 1.4 3.2.6 4-2.8 2.8 1.3 19 6.3 24.7 1.6 1.9 3 3.9 3 4.5 0 .6 1 2.5 2.2 4.2 1.3 1.8 2.1 3.8 2 4.5-.4 1.8 2.7 5.2 4.7 5.2.9 0 3.9 1.4 6.6 3 2.8 1.6 5.7 3 6.6 3 .9 0 2.9.6 4.5 1.4 1.6.8 7.4 1.7 12.9 2 5.6.2 11.4 1 13 1.7 4 1.6 16.4 1.2 19.2-.6 1.2-.8 2.9-1.5 3.6-1.5 1.4 0 11.6-7.6 16.9-12.5 1.5-1.4 3.3-2.5 4-2.5 1.9 0 3.8 2.1 3.8 4.1 0 1.8 7.1 5 14.8 6.7 5 1.1 15.1 0 16.3-1.9.9-1.4 1.4-5.4.9-7.4-.1-.6-.6-2.5-1-4.4-.5-2-2.3-4.5-4.4-6.3l-3.6-3 .4-12.4c.3-6.8.1-12.6-.4-12.9-.4-.3-.1-2.3.6-4.6 2.1-5.9 2.8-25.4 2.2-54.9-.2-8.6-.7-16-1-16.5-.3-.6-.9-2.8-1.2-5-1.1-6.2-3.3-8.2-9.9-8.9-1.2-.2-3.9-.8-6-1.5-2.2-.8-5.4-1-7.6-.6-3.4.6-4.1.3-5.1-1.4-.6-1.2-1.6-2.1-2.2-2.1-.7 0-2.2-1-3.5-2.2-2.8-2.6-14.1-5.8-19.8-5.6-2.2 0-8.1.5-13.2 1zm26.4 33.1c7.7 4.7 8.7 5.9 9 11.6.1 2.5.5 9.4.9 15.3.4 5.8.3 11.4-.1 12.5-.5 1-1 4.7-1.1 8.3-.2 3.6-.7 8.6-1 11.1-.3 2.5-.1 6.3.5 8.4.9 3.5.8 4.1-2.2 7.9-1.8 2.3-4.9 5.7-7 7.6-2.1 1.8-5.1 4.5-6.7 6-1.8 1.7-5.3 3.2-9.8 4.3l-7 1.7-7.3-2.9c-4.1-1.5-9.4-3.4-11.8-4.2-7.2-2.2-10.4-4.9-12.2-10.2-.8-2.6-1.8-5-2.2-5.3-.4-.4-.4-1.1-.1-1.6.4-.6.7-7.4.8-15.2l.2-14.1 4.1-7.7c2.3-4.2 3.9-7.8 3.7-8.1-.3-.2.5-2.1 1.7-4.1 1.1-2 1.8-3.6 1.4-3.6-.3 0 .8-1.2 2.6-2.7 1.7-1.5 3.8-4.2 4.5-5.9 1.4-3.3 2.6-4.2 12.1-8.9 2.9-1.5 5.5-3 5.8-3.5.3-.5 3.8-.8 7.9-.6 6.3.2 8 .7 13.3 3.9z'
    />
  </svg>
);

export default Logo;
