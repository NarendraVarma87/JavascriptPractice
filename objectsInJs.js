/* Objects are used to store the RealTime Entity or set of information in a key value pairs.
 we can store object inside another object
 also using for in loop to iterate key value pairs
 */

const objPractice = () => {
    let person1 = {
        name : 'Narendra Varma',
        age : 21,
        qualification : 'Graduate',
        location : 'Andhra Pradesh',
        skills : {
            mainSkills:'Java, SpringBoot, Javascript, React, MySql',
            secondarySkills : 'Html and Css, Bootstrap, Oracle, Github',
            strongBasicUndestandingSkills :'MS Office' ,
            leastValuebleSkills : 'Postman, Vscode, Eclipse'
        },
        interests : {
            techinal : 'Compitative Programming , Learing new techmologies , attending bootcamps , contributing in open source projects',
            general : 'travelling , watching anime, spending quality time with frnds nd family'
        },
        DOB : '25-07-2002',
        role : 'Full Stack Dev'
    }
    for(let value in person1){
        console.log(value , person1[value]);
    }
    for(let key in person1.skills){
        console.log(key +" : "+person1.skills[key]);
    }
    for(var input in person1.interests){
        console.log(input +" : "+person1.interests[input]);
    }
}
objPractice();