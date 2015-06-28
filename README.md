# hashNav
Lets you add/remove classes and show and hide elements based on hash tag. You can use it to create hash based navigation menus.

For example to show and hide full screen menu

```javascript
var h = new hashNav();
h.add('menu'); //will set style d:n d:b 
```
 
     <div id = 'menu'> .... //give menu id to div that needs to become visible, usually container div.
     
     <a href='#menu'> Show menu </a>
     
Once menu is visible pressing backspace or back button on browser will hide it again. 

Furthermore..

you can assign a class or classes to element that needs to be applied and removed. Instead of just default behavior which sets `display:none` and `display:block`.

     h.add('heading', 'red bo'); // or you can tell what class(es) to add and remove
     h.add('pp', 'red bo');
     
[Jsfiddle Demo](http://jsfiddle.net/0uk0g0qq/10/)

The reason i created this library is because `:target` css trick and `history api` wasn't working in ie, meaning if hash changed programmatically the correct classes won't apply. 

This library hasn't been tested, and i welcome all to improve this in anyway possible. Thanks. 

Api
-----

    h.add(id [, classString]);
    h.remove(id [, classString]); //can remove all classes, or few. Not providing 2nd parameter will remove the element from list.
    
