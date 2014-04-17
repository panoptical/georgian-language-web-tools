﻿//alert("Hello World");

/*************************************/
//function definitions
function nationalminusTrans(a)
{
    var word=a;

    word=word.replace(/ქ/g,"k");
    word=word.replace(/წ/g,"ts");
    word=word.replace(/ჭ/g,"ch");
    word=word.replace(/ე/g,"e");
    word=word.replace(/რ/g,"r");
    
    word=word.replace(/ღ/g,"gh");
    word=word.replace(/ტ/g,"t");
    word=word.replace(/თ/g,"t");
    word=word.replace(/ყ/g,"q");
    word=word.replace(/უ/g,"u");
    
    word=word.replace(/ი/g,"i");
    word=word.replace(/ო/g,"o");
    word=word.replace(/პ/g,"p");
    word=word.replace(/ა/g,"a");
    word=word.replace(/ს/g,"s");
 
    word=word.replace(/შ/g,"sh"); 
    word=word.replace(/დ/g,"d");
    word=word.replace(/ფ/g,"p");
    word=word.replace(/გ/g,"g");
    word=word.replace(/ჰ/g,"h");
    
    word=word.replace(/ჯ/g,"j");
    word=word.replace(/ჟ/g,"zh");
    word=word.replace(/კ/g,"k");
    word=word.replace(/ლ/g,"l");
    word=word.replace(/ზ/g,"z");
    
    word=word.replace(/ძ/g,"dz");
    word=word.replace(/ხ/g,"kh");
    word=word.replace(/ც/g,"ts");
    word=word.replace(/ჩ/g,"ch");
    word=word.replace(/ვ/g,"v");
    
    word=word.replace(/ბ/g,"b");
    word=word.replace(/ნ/g,"n");
    word=word.replace(/მ/g,"m");

return word;
}



function trans(node){
  var treeWalker = document.createTreeWalker(
      node,
      NodeFilter.SHOW_TEXT,
      null,
      false
  );
  while(treeWalker.nextNode()) {
    var current = treeWalker.currentNode;
    if(current.textContent != null)
      {
      current.textContent = nationalminusTrans(current.textContent);
      }
  }



}

//end of function definitions
/****************************************/



/*****************************************/
//these commands are executed in each page


//calls the function that transcribes the text
 //from GEO to LAT
trans(document);




//creates a listener that transcribes any new
 //nodes that get added to the page
document.body.addEventListener(
	'DOMNodeInserted',
	function(event) {trans(event.target);}
	);






/*current issues:
//trans(document.title);
//alert("title transliterated");
//trans(document.body);
trans(document.title) failed
 - resolved!  trans(document) rather than 
 trans(document.body)
does not transliterate text defaulted in fields
 - is there a way to search the document for these?
  - I think this is JQuery...

current.setAttribute("value",nationalminusTrans(current.getAttribute("value")));
 - idea:
  - get elements by tag name "input"
  - setattribute (value) to nationalminusTrans(value)

psuedo/code:
var inputNodes = document.getElementsByTagName("input");
for i in inputNodes
{
 current.setAttribute("value",nationalminusTrans(current.getAttribute("value")));
current.setAttribute("placeholder",nationalminusTrans(current.getAttribute("placeholder")));
}

The following failed:
---

var inputNodes = document.getElementsByTagName("input");
alert(inputNodes.length);
for (var i = 0; i < inputNodes.length; ++i) {
  inputNodes[i].setAttribute("value",nationalminusTrans(current.getAttribute("value")));
  inputNodes[i].setAttribute("placeholder",nationalminusTrans(current.getAttribute("placeholder")));
}


---
function myfilter(node){
  if (node.tagName=="input") //accept only input tags
    return NodeFilter.FILTER_ACCEPT;
  else
    return NodeFilter.FILTER_SKIP;
};

  var treeWalkertwo = document.createTreeWalker(
      node,
      NodeFilter.SHOW_ELEMENT,
      null,
      false
  );

  while(treeWalkertwo.nextNode()) {
    var current = treeWalker.currentNode;
   // if(current.getAttribute("type") != "radio" && current.getAttribute("type") != "checkbox")
   //   {
      current.setAttribute("value", "hi"); //nationalminusTrans(current.getAttribute("value")));
   //   }
  }


does not transliterate text on a button


I should really make the icon a page action that shows up
 when the page has some Georgian text
 - use the page action by content google example
 http://developer.chrome.com/extensions/samples.html#fad62e9f7f55a4c7a8add7662b166779

*/
