# LAB Exam: Instruction

\*\*\*Write your student id, firstname, and lastname in a single line comment before starting your program, students who do not put this comment will get 50% taken off their score.\*\*\*

# Product Requirements

Your JavaScript allows users to add new product name by entering text into the input field, clicking the "Add" button, and remove individual products by clicking the "Remove" button associated with each product. Additionally, there is a "Remove All" button that clears the entire product list.

## HTML Structure:

The HTML contains a product container with an input field, an "Add" button, and a "Remove All" button.
There is a separate container for the product list identified by the product-list id.

## JavaScript Program:

### registerEvent Function

1. Add an event listener to the "Add" button to call the "addNewProduct" function when clicked.
2. Add an event 'click' to the "Remove All" button by calling handler function named "removeAllProduct" to clear the entire product items inside product list.

### addNewProduct Function:
   
   - Append the p element and "Remove" button to the product-list.
   - Clear a previous product name in the input textbox.
   - For example, filling an product name "abc" in input element, it will create a new product element inside <div id="product-list"></div> like this:

```
<div id="abc" class="product-item">
      <p>abc</p>
      <button>Remove</button>
 </div>
```

### removeProduct Function:

accept the product id as its parameter and then select that product element to be removed from product-list parent element.

### removeAllProduct Function:

remove all the entire product items inside product list

# Screen Capture Outputs

- ![demo clip](demoOutput/demo.mp4)
