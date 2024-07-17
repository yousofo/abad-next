"use client"
import react, { useEffect } from 'react';

const BrowserWarning = () => {
  useEffect(() => {
    const { browserName, browserVersion } = getBrowserInfo();
    console.log("hi")
    const outdatedBrowsers = {
      "Internet Explorer": "11",
      "Safari": "11", // Safari 10 and below are considered outdated
      "Chrome": "60",
      "Firefox": "54",
      "Edge": "15"
    };

    if (outdatedBrowsers[browserName] && parseFloat(browserVersion) < parseFloat(outdatedBrowsers[browserName])) {
      alert(`You are using ${browserName} ${browserVersion}. Please update your browser or switch to a modern browser for the best experience.`);
    }
  }, []);

  return null; // No need to render anything
};

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = "Unknown";
  let browserVersion = "Unknown";

  if (/MSIE|Trident/.test(userAgent)) {
    browserName = "Internet Explorer";
    const match = userAgent.match(/(MSIE |rv:)(\d+\.\d+)/);
    if (match && match.length > 2) {
      browserVersion = match[2];
    }
  } else if (/Chrome/.test(userAgent)) {
    browserName = "Chrome";
    const match = userAgent.match(/Chrome\/(\d+\.\d+)/);
    if (match && match.length > 1) {
      browserVersion = match[1];
    }
  } else if (/Firefox/.test(userAgent)) {
    browserName = "Firefox";
    const match = userAgent.match(/Firefox\/(\d+\.\d+)/);
    if (match && match.length > 1) {
      browserVersion = match[1];
    }
  } else if (/Safari/.test(userAgent) && !/Chrome/.test(userAgent)) {
    browserName = "Safari";
    const match = userAgent.match(/Version\/(\d+\.\d+)/);
    if (match && match.length > 1) {
      browserVersion = match[1];
    }
  } else if (/Edge/.test(userAgent)) {
    browserName = "Edge";
    const match = userAgent.match(/Edge\/(\d+\.\d+)/);
    if (match && match.length > 1) {
      browserVersion = match[1];
    }
  }

  return { browserName, browserVersion };
}

export default BrowserWarning;
