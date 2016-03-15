#What is the DOM?
##DOM → Document Object Model
From https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction“The Document Object Model (DOM) is a programming interface for HTML and XML documents.”
From https://www.w3.org/DOM/: “The Document Object Model is a platform- and language-neutral interface that will allow programs and scripts to dynamically access and update the content, structure and style of documents. The document can be further processed and the results of that processing can be incorporated back into the presented page. This is an overview of DOM-related materials here at W3C and around the web.”
The DOM is a version of the HTML page that lives in the browser; JS can access the HTML elements, and make changes to the HTML


Describe the role JavaScript plays in manipulating the DOM
JavaScript is a scripting language, and scripts can access and manipulate elements in the DOM


DOM Tree with Nodes?  



Explain that HTML elements (attributes?) are the default values for DOM properties

What is XML?
From WC3: “Extensible Markup Language (XML) is a simple, very flexible text format derived from SGML (ISO 8879).”
Encodes text so that it is both machine and human readable. Robin (read: librarians) use XML because it is easy to share search results that are in different formats
From http://www.xmlobjective.com/what-is-the-difference-between-xml-and-html/
XML is the acronym from Extensible Markup Language (meta-language of noting/marking). XML is a resembling language with HTML. It was developed for describing data.
The XML tags are not pre-defined in XML. You will have to create tags according to your needs.
XML is self descriptive.
XML uses DDT principle (Defining the Document Type) to formally describe the data.
The main difference between XML and HTML: XML is not a substitute for HTML.
XML and HTML were developed with different purposes:
XML was developed to describe data and to focalize on what the data represent.
HTML was developed to display data about to focalize on the way that data looks.
HTML is about displaying data, XML is about describing information.
XML is extensible.


describe javascript’s role in manipulating the DOM
In JS, the keyword ```document``` is how we access the DOM
The document is the root node

Question: Why does document.getElementsByTagName() return an array?
Answer: the method returns an HTMLcollection. MDN: “The HTMLCollection interface represents a generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.”
My answer: You want to have access to all the methods on the object(array) like .innerHTML and .onkeypress, etc.

document.getQuerySelector(‘.odd’) returns the first item in the HTMLCollection
document.querySelectorAll(‘.odd’) returns all items in the HTMLCollection

-----------------

Traversing the DOM

In the last section, you were introduced to DOM traversal, which is simply the action of traveling up and down through the DOM in order to target a specific Node.

Read about traversing the DOM here. Once done, make sure you understand, conceptually, what the following properties do:

childNodes - targets all child nodes, returning a collection
firstChild - targets the first child node
lastChild - targets the last child node
parentNode - targets the parent node from the current node
nextSibling - targets the next node at the same level as the current node
previousSibling - targets the previous node at the same level as the current node
Now, go back and experiment with each first in the console before you update the main.js file.



explain that HTML attributes are default (initial) values for DOM properties
explain that DOM properties can be altered after initial page load
explain that the DOM provides a way for programs to change the structure, style, and content on a page dynamically
explain the difference between a text node and an element
find an element by id, tagname, classname, and more advanced CSS selectors
set an element’s innerHTML and text
construct and add simple elements to the DOM
remove elements from the dom
detach and reattach DOM elements
access properties of DOM elements such as text, html, value
