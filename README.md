# roman-convert-api

* REST API with Node.js and Express hosted on Heroku.

* Input an integer will convert it to a roman numeral.

  Reference from LeetCode problem [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman/).

  Integer constraints:
    - 1 <= integer <= 3999

## API
### GET Method
```
GET https://roman-convert.herokuapp.com/{integer}
```
### POST Method
```
POST https://roman-convert.herokuapp.com/roman
```
#### Request body
> num ( Type: Integer )

#### Response
> roman ( Type: String )
---

## Project setup
```
npm install
```

## Server start
```
npm start
```

