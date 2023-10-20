# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

<div class="image-container">
  <img src="images/screenshot.png" alt="Intro component with sign up form desktop" height= "400">
  <img src="images/screenshot-mobile.png" alt="Intro component with sign up form mobile" height= "400" >
</div>

### Links

- Live Site URL: [https://intro-component-with-signup-form-0.netlify.app/](https://intro-component-with-signup-form-0.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

In this project, I learned the following, with a specific focus on JavaScript:

1. **HTML and CSS Structure**: I practiced building a responsive web page with well-structured HTML and CSS. This involved creating a sign-up form within a two-column layout, applying styles, and ensuring a visually appealing design.
2. **Form Validation**: I gained a strong understanding of form validation. I implemented validation for various input fields, including checking for empty fields, valid email addresses, and minimum password length. This ensures that user-provided data is accurate and complete.
3. **JavaScript Event Handling**: I learned to handle form submissions using JavaScript. The **`submit`** event was utilized to prevent the default form submission and trigger custom validation.
   ```js
   signupForm.addEventListener('submit', (e) => {
     e.preventDefault();
     validateInputs();
   });
   ```
4. **DOM Manipulation**: I worked with the Document Object Model (DOM) to manipulate and update the webpage dynamically. JavaScript was used to toggle error messages and icons, change border colors, and clear the form upon successful submission.
5. **Regular Expressions**: I applied regular expressions to validate email addresses. This is a powerful technique for checking complex patterns in user input.
6. **Conditional Logic**: I utilized conditional statements to determine whether the form data is valid and display error messages accordingly. This logic helps guide the user through the sign-up process.
7. **Responsiveness**: I made the webpage responsive, ensuring that it looks and functions well on both mobile and desktop screens. This involved using media queries to adapt the layout for different screen sizes.

Overall, this project significantly improved my JavaScript skills, particularly in the context of form validation and DOM manipulation, while also reinforcing HTML and CSS practices.

## Author

💼 **LinkedIn**: <a title="Meryem Çetinkaya | LinkedIn" href="https://www.linkedin.com/in/meryem-cetinkaya/" target="_blank">Meryem Çetinkaya</a><br/>
🐈‍⬛ **GitHub**: <a title="Meryem Çetinkaya | GitHub" href="https://github.com/meryemctnky" target="_blank">Meryem Çetinkaya</a><br/>
📩 **E-mail**: <a title="meryemctnkya@gmail.com" href="mailto:meryemctnkya@gmail.com" target="_blank">meryemctnkya@gmail.com</a><br/><br/>
