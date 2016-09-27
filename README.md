# Ember-imdt-table
This is an Ember Table Component inspired on Ember-models-table: https://github.com/onechiporenko/ember-models-table
# This project was moved to: https://github.com/iMDT/ember-imdt-table
# Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

First set your content up, here we are using a predefined json as the content, but you can use your model aswell.
```javascript
// ../controllers/index.js
values = [
  {
    "id":1,
    "firstName":"Kiana",
    "lastName":"Murphy",
    "age":19,
    "city":"Lahore",
    "cityWithHtml":"<i>Lahore</i>"},
  {
    "id":2,
    "firstName":"Ingeborg",
    "lastName":"Jones",
    "age":48,
    "city":"Tianjin",
    "cityWithHtml":"<i>Tianjin</i>"},
  {
    "id":3,
    "firstName":"Chuck",
    "lastName":"Ali",
    "age":32,
    "city":"Bogotá",
    "cityWithHtml":"<i>Bogotá</i>"},
  {
    "id":4,
    "firstName":"Chasity",
    "lastName":"Quinn",
    "age":36,
    "city":"Cairo",
    "cityWithHtml":"<i>Cairo</i>"},
  {
    "id":5,
    "firstName":"Chuck",
    "lastName":"Taylor",
    "age":44,
    "city":"Lahore",
    "cityWithHtml":"<i>Lahore</i>"
  }
];
```
---
Then set up the table properties
```javascript
// ../controllers/index.js

content: values,
columns: new A([{
  contentPath: 'id',
  columnTitle: 'ID',
  isSortable: false,
  isSearchable: false,
}, {
  contentPath: 'firstName',
  columnTitle: 'First Name'
}, {
  contentPath: 'lastName',
  columnTitle: 'Last Name'
}, {
  contentPath: 'cityWithHtml',
  columnTitle: 'City',
  sortPath: 'city'
},
{
  contentPath: 'age',
  columnTitle: 'Age'
},
```
---
After you have everything set up, all you need to do is use the table helper on your template and pass your defined properties as parameters, along with more options:

```handlebars
<!-- ../templates/index.hbs -->

{{imdt-table
  content=content
  columns=columns
  sortProperties=sort
  paginable=true
  searchable=true
  sortable=true
}}
```
---
If you want to set some sort properties for the table to be sorted on load you can do it, like this:

```javascript
sort: new A(['city:desc', 'firstName:desc', 'lastName:asc']),
```

### Supported Properties
property|description|default
----|------|-----
content| content that will be displayed in the table cells|null
columns|column configuration and names|null
sortProperties|sort properties on load|null
paginable |whether the table has pagination or not|false
searchable|whether the table has search or not|false
sortable|whether the table is sortable or not|false
useSimplePagination|whether the page has simple pagination or numbered pagination|true


### Rendering templates on column
If you want to render a custom template inside a table cell, like a button, checkbox, or wathever else you would need you can do it by adding the column that will render the template in your column configuration, like this:
```Javascript
// ../controllers/index.js

columns: new A([{
    contentPath: 'id',
    columnTitle: 'ID',
    isSortable: false,
    isSearchable: false,
  }, {
    contentPath: 'firstName',
    columnTitle: 'First Name'
  }, {
    contentPath: 'lastName',
    columnTitle: 'Last Name'
  }, {
    contentPath: 'cityWithHtml',
    columnTitle: 'City',
    sortPath: 'city'
  },
  {
    contentPath: 'age',
    columnTitle: 'Age'
  },
  {
    contentPath: 'template',
    columnTitle: 'Template',
    template: 'custom/button'
  }
 ```
...
## Running

* `ember server`
* Visit your app at http://localhost:4200.
