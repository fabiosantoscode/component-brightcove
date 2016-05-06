/* global window */
import 'babel-polyfill';
import React from 'react';
import Brightcove from './';
import promisescript from 'promisescript';

function getBrightcoveFromWindow() {
  return window.brightcove ?
    window.brightcove :
    Promise.reject('brightcove loaded, but window.brightcove is unavailable');
}
const promiseForBrightcove = promisescript({
  url: 'https://admin.brightcove.com/js/BrightcoveExperiences.js',
  type: 'script',
  exposed: 'brightcove',
}).then(getBrightcoveFromWindow);
function getPromiseForBrightcove() {
  return promiseForBrightcove;
}
export default (
  <Brightcove
    videoID="4225569290001"
    playerID="2838878175001"
    playerKey="AQ~~,AAABDH-R__E~,dB4S9tmhdOq35Ku8dzbljooa_fJXxLcL"
    labels="http://cdn.static-economist.com/sites/all/modules/custom/ec_brightcove/EcBcLables.xml"
    getBrightcoveExperience={getPromiseForBrightcove}
  />
);
