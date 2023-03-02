# React-School-Project-Assignment

## Create a new React project (using either JavaScript or TypeScript)

`Project Dashboard-assignment-one`

## Structure the folder and remove all unecessary files. Organize your components into a folder called “components” inside “src”.

![image](https://user-images.githubusercontent.com/89275952/190236841-ee18bc44-9a03-45f0-8110-3f4d6aa84e87.png)

## Your app should have at least 3 views and navigation in your application should be done using react-router-dom. Example: https://v5.reactrouter.com/web/guides/quick-start

![image](https://user-images.githubusercontent.com/89275952/190238489-48c85176-8f4d-4d40-abb8-995f95078dfb.png)

In the project, i've used route and navigation on my navbar. The "navigate concept" is used in another file (see 1 and picture below) with constant of arrays where the route is defined and then used in index.JS which has the path of the page.

![image](https://user-images.githubusercontent.com/89275952/190239327-00ad1f98-2fa7-4494-b77e-deed97ca48a0.png)

![image](https://user-images.githubusercontent.com/89275952/190239755-bab0ec07-2d6b-47c5-af11-cc64e58c8572.png)

## Your application must make use of the following things: * form * useState hook to handle form data

The Form i've used is in the NewUserModal component, where I've used the component TextField from Mui and it's props, in a "content" prop in basicModal which also is an mui component (Modal).

At first, I used the Input field from Mui Inputs, but due to that the input field could not handle "error messages", I had to do a work around with the TextFields component and use Yup resolver in order to handle validates and error messages (which you can see more in the "validationSchema" variable than contains the methods from yup which implements the requirements for the field (ex. min length).

Regarding the useState hooks to handle form data, in the same file (newUsermodal.js), i use values from the Textfields comp. in order to both add a user, also to defaultvalue to empty strings when moving out of the modal - otherwise, the values would remain in the fields when closing the modal -.

![DashboardAddUserGif](https://user-images.githubusercontent.com/89275952/190246309-bbc1e844-bec2-4c2d-af21-63d69ec9ac39.gif)


##  Your project should be version controlled and uploaded to github. There should be a README.md with information about the kind of application you built and it should include screenshots.

If you reached this stage, then you are where you should be and this subject/point fulfills this task. 
