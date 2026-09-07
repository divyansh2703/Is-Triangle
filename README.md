# Triangle Geometry Learning Interface

A collection of small browser exercises around triangle geometry. Separate HTML and JavaScript files implement an angle sum check, area calculation, hypotenuse calculation and a quiz.

## The question

How can basic geometry rules be explored through simple browser inputs and feedback?

## Tools and methods

HTML, JavaScript, DOM events, Form handling.

## Work in this repository

1. Created separate pages for angle checking, area and hypotenuse calculations.
2. Read numerical inputs and displayed calculated responses.
3. Built a two question quiz with scoring through FormData.

## Evidence and scope

| Measure | Recorded value |
| --- | --- |
| Interactive pages | 4 |
| Quiz questions scored by the current answer list | 2 |

## Repository guide

| File or folder | Purpose |
| --- | --- |
| [isTriangle.html](https://github.com/divyansh2703/Is-Triangle/blob/main/isTriangle.html) | Angle checking page |
| [area.html](https://github.com/divyansh2703/Is-Triangle/blob/main/area.html) | Area page |
| [hypotenuse.html](https://github.com/divyansh2703/Is-Triangle/blob/main/hypotenuse.html) | Hypotenuse page |
| [quiz.html](https://github.com/divyansh2703/Is-Triangle/blob/main/quiz.html) | Quiz page |
| [quiz.js](https://github.com/divyansh2703/Is-Triangle/blob/main/quiz.js) | Quiz scoring |

## Getting started

Open one of the HTML pages directly, starting with `isTriangle.html`. The repository does not have a root `index.html`. No dependency installation is needed for these browser exercises.

## Current limitations

1. Angle sum alone does not establish valid positive angles. Inputs need finite positive value checks.
2. Browser numeric calculations use JavaScript numbers; the hypotenuse calculation is not a symbolic exact arithmetic engine.

## Authors and reuse

Divyansh Doshi.

Documentation reviewed against the public repository on 7 September 2026. Counts are taken from the named saved artifacts or directly inspected CSVs; this review did not rerun model training or validate a complete deployment. No source code licence was found in the reviewed project tree. Data and third party material may have separate terms.
