// Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the body element is clicked.
// Do not select the h1 element again!

// And now explain to yourself (or someone around you) why this worked!
// Take all the time you need.
// Think about when exactly the callback function is executed, and what that means for the variables involved in this example.

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

// Steps of execution:
// 1. IIFE Starts: The JavaScript engine encounters the IIFE and immediately executes it.The IIFE is executed and the header variable is set to the h1 element.
// 2. Inside the IIFE, the header variable is assigned the h1 element.
// 3. The color of the h1 element is set to red.
// 4. The click event listener is attached to the body which listens for click events and specifies the callback function to execute on each click.
// 5. Once the event listener is attached, and there are no more synchronous statements to execute. The IIFE has completed all its statements and therefore finishes execution.
// 6. The code is now idle, waiting for a click event on the body element. Once a click occurs, the callback function is invoked, and it changes the header color to blue.

// ** Closure and Event Listener: The body's click event listener continues to exist after the IIFE completes. The callback function retains access to the header variable because of closure, even though the IIFE is no longer running. This is why the callback function can still access the header variable and change the color of the h1 element to blue. ** //
