// Objects are used with for-in loop 
const myObject = {
    js : "javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    //console.log(key,"is for", myObject[key]);
}

// BUT IN THE CASE OF ARRAY WHILE IMPLEMENTING IT WITH FOR-IN LOOP IT WILL GIVE YOU INDEX VALUES WHEN YOU TAKE KEY AS A ITERATOR BUT IN THE CASE OF FOR-OF IT WAS GIVING VALUE PRESENT NOT THE KEY i.e INDEX VALUE.

// objects me we can give the keys as per our choice but when it comes to array keys are nothing but index values that is 0,1,2,...

// Array in for-in Loop:-
const proLang = ['js', 'cpp','java', 'ruby', 'python']
for (const key in proLang) {
    console.log(proLang[key]);
}

// Map function iteratable nahi hai so we cannot use for-in loop for map function i.e agar koi chiz iteratable nahi hai toh usko loop me nahi likhte.

