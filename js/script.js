document.addEventListener('DOMContentLoaded', function () {

    // Adding a click event listener to a button
    const btn1 = document.getElementById('btn1');
    btn1.addEventListener('click', function () {
     
        console.log('Button 1 clicked');
    });

    //  Adding a click event listener to another button
    const btn2 = document.getElementById('btn2');
    btn2.addEventListener('click', function () {
       
        console.log('Button 2 clicked');
    });


});
