# vue-epic-io
Easy vue intersection observer

Use for Lazy-Loading or Infinite Scrolls

## Support
Optionally add the polyfill and make sure it's required on your dependendencies for unsupporting browsers:

![image](https://user-images.githubusercontent.com/37227357/108386835-a4fc4880-71d2-11eb-82ca-9b5824b2c310.png)


## What does IntersectionObserver do?

API that can be used to understand the visibility and position of DOM elements relative to a containing element or to the top-level viewport. The position is delivered asynchronously and is useful for understanding the visibility of elements and implementing pre-loading and deferred loading of DOM content.

![image](https://user-images.githubusercontent.com/37227357/108387360-22c05400-71d3-11eb-8aa0-19e65cbf24b0.png)


## Why use this component?

The purpose of this component is to provide the simplest solution for observing the elements that enter the viewport on the Vue codebase. It is completely declarative, all complexity is abstracted away, and the focus is on reusability and low memory consumption.


## Options And Method
| Name       | Type                     | Default  | Required                                                                              | Description                                                                                                                                                                                                                                                                                            |
| ---------- | ------------------------ | -------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| root       | HTMLElement              | false    | default browser viewport is used as root if root is specified as null or unspecified. |
| rootMargin | String                   | '0px'    | false                                                                                 | defines the margin of the root element, which is used to expand or reduce the size of the rootBounds rectangle and thus affects the size of the intersection area of the intersectionRect. It uses CSS definitions such as 10px 20px 30px 40px to represent the values of top, right, bottom and left. |
| threshold  | Number or Array\<number> | 0        | false                                                                                 | The threshold property determines when the callback function is triggered. It is an array where each member is a threshold value, which defaults to [0], i.e. when the intersectionRatio reaches 0, the callback function is triggered.                                                                |
| on-change  | Function                 | required | (entry, unobserve) => {}                                                              |