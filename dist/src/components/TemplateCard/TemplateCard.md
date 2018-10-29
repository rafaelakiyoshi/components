### TemplateCard Component
This component allows you to render different cards based on a JSON file, which is called the "template".

------

#### Example:
Those cards was build using the TemplateCard component and different Json Templates.
![m](https://i.imgur.com/1AZYSP6.png)

#### How to Use:
 In order to use the TemplateCard Component you must have a template to use. Pass it through props as below:

``` js
<TemplateCard
    template={SomeTemplate}
    {...SomeData}
/>
```

Please be careful passing data. Notice that the **keys** of data object must have the same value as the field **props** in the Template Element.
For example, if you want to pass the following data to a TemplateCard:
``` js
someData = {
    title: 'Some Title',
    info: 'Some Info'
}
```

You should have two fields in Json Template to consume those data. As mentioned, in those fields, the **props** should have the same name as the **someData key** that you want to fit. Let's create two elements, the first one for the **title** and the second one for the **info**. (Don't worry, the explanation of How to create and use the Template is in a topic below)

``` js

{
    "rows": [
        {
            "i": "a",
            "x": 0,
            "y": 0,
            "w": 1,
            "h": 1,
            "static": true,
            "componentName": "h1",
            "prop": "title",
            "import": false,
        },
        {
            "i": "b",
            "x": 1,
            "y": 1,
            "w": 1,
            "h": 1,
            "static": true,
            "componentName": "h2",
            "prop": "info",
            "import": false,
        },
    ]
}
```

#### Props:

| Prop |Information|Type   |Default      |
| ------------- |-------------|-----|--------|
| data | data pass to fill the card with information | Object | N/A|
| template     | Json Object with the position of each element | Object | N/A|
| cols     | Number of Card's Columns | Number | 12|
| rowHeight     | The Height of each row | Number | 15 |
| width     | The width of the Card | Number | 220 |
| margin     | The margin between components into the card | Array | [0,0] |

#### Template:

Each Template Json has two main things: An array of rows and an Object of styles:

``` js
{
    "rows" [],
    "styles" {

    }
}
```

Into the **rows** Array you have to create the elements. Each and every element must have the following attributes:

```js
{
    "i": This is an ID for the React Layout Grid, please do not repeat it,
    "x": This is where your component will begin Horizontally,
    "y": This is where your component will begin Vertically,
    "w": This is your component Width,
    "h": This is your component Height,
    "static": If components should be able to move (true or false),
    "componentName": The **Exact** same name as the Tag. (h4 or span or Custom)
    "import": If you are using HTML component, let this false. If you are using
            antd component let this 'antd', otherwise let true.
    "prop": The same name as **the data key** you want to fit here,
    "attributes": {
        "className": CSS Class name you want to pass into the component,
        Here, any attribute will be passed to the component via {...attributes}
    }
}
```