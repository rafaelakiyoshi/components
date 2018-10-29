### SideBar Component
This component allows you to create a SideBar with a pre-defined design for Fluent.AI Cloud Platform.

------

#### Example:
Dark Theme:

![](https://i.imgur.com/Dn7AUiC.png)
![](https://i.imgur.com/Bp6Otl0.png)


Light Theme:

![](https://i.imgur.com/N3Afr4g.png)
![](https://i.imgur.com/7AcrX8L.png)

#### How to Use:
 In order to use the SideBar Component you must have the menu items as an array. Pass it through props. Please make sure the SibeBar is inside a Layout. This layout is for fill out all the screen with the menu. You can use another innet layout from antd for the router components

``` js
import MenuJson from './menu.json';

<Layout style={{ minHeight: '100vh'}}>
    <SideBar menu={MenuJson} theme="dark"/>
</Layout>
```

#### Props:

| Prop |Information|Type   |Default      |
| ------------- |-------------|-----|--------|
| menu | data passed to create the menu items with it's icons | Array | N/A|
| theme | You can change between dark and light theme, just pass it through props | string | light|

#### Menu:

The Menu Array must contain objects with the following attributes:

```js
[
    {
        "id": 1, 
        "name": "Option 1", // The name that will appears in menu
        "route": "/option1", // The router you will be pushed in when click
        "icon": "pie-chart", // The icon will appears in menu item
        "children": false // The sub-items of this item
    },
]
```

If you want to fill out some inner items in menu, make sure to push some objects into children attribute, just like that:

```js
[
    {
        "id": 2,
        "name": "Users",
        "route": "/users",
        "icon": "user",
        "children": [
            {
                "id": 2.1,
                "name": "Tom",
                "route": "/users/tom"
            },
            {
                "id": 2.2,
                "name": "Bill",
                "route": "/users/bill"
            },
            {
                "id": 2.3,
                "name": "Alex",
                "route": "/users/alex"
            }
        ]
    },
]
```
**Remember:** Inner Items doesn't have neither Icons or Inner Items. You can not create, unless you want to modify the code in order to do that.