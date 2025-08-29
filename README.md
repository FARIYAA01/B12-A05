1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? 
Ans: The Javascript DOM methods getElementID, getElementsByClassName, querySelector and querySelectorALL ,all of these are used in DOM to select elements.However all of the them have difference in syntax,flexibility and return values.
Like getElementById(id):
•	Selects one single element by its id attribute.
•	Return a single Element object that was declared by id .
•	ID must be unique in an HTML document, it always returns at most one element.


2.How do you create and insert a new element into the DOM?
     Ans:- To add a new element to the DOM, 
You first need to create it using “ document.createElement("tagName") “, then give it some content or attributes like ‘ text, classes, or IDs, ‘and finally insert it into the page by attaching it to an existing element with methods such as appendChild(), prepend(), or append().
For example, if you wanted to add a new paragraph:
•	First, you create the <p> element.
•	Then, you give it some text.
•	Finally, you attach it to the body (or wherever you want it to appear).


3. What is Event Bubbling and how does it work?
Ans:    Event bubbling is a way events in the DOM travel or “propagate.” When you click or trigger an event on a child element, that event doesn’t just stay there — it first runs on the child, then moves up (or “bubbles up”) through its parent, then the grandparent, and so on until it reaches the document root. For example, if you click a button inside a <div>, the click event will first fire on the button, then on the <div>, then on the <body>, and finally on the <html> and document. This is useful because you can handle events at a higher level (like the parent) instead of adding separate event listeners to every child.


4.	What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation is a JavaScript technique where you don’t attach event listeners to every single child element. Instead, you put just one listener on the parent, and because of event bubbling, the event will “bubble up” from the child to the parent. Inside that parent’s listener, you can check which child actually triggered the event using event.target.
This is really useful because :
•	it saves memory (fewer listeners to manage).
•	it automatically works for elements that get added later to the parent, and 
•	it keeps your code cleaner and easier to manage. 

A common example is with a list: instead of adding a click listener to every <li>, you simply add one to the <ul> and handle all the clicks from there.


5.What is the difference between preventDefault() and stopPropagation() methods?
Ans:  The difference is simple but important:
•	preventDefault():  Stops the browser’s default behavior for an event. For example, if you click a link, it normally navigates to another page. If you call preventDefault(), the navigation won’t happen, but the event will still bubble up.
•	stopPropagation(): Stops the event from bubbling up to parent elements. The event still happens on the target element, but it won’t travel any further up the DOM tree.
preventDefault() stops the browser’s default action, while stopPropagation() stops the event from moving up the DOM.
