const students = [{
    name : 'john',
    notes : [10,20,17,]
},
{ name : 'jane',
    notes : [4,15,16]

},
{
    name : 'sophie',
    notes : [15,18,20]
},
{
    name : 'marc',
    notes : [20,20,19]
},
{
    name : 'manon',
    notes : [14,18,14]
}]
  
 console.log(students);

 for(let  eleves of students){
    console.log('je m\'appelle ' + eleves['name'] + ' et mes notes sont ' + eleves['notes'].join('-'));
    const sommeDesNotes = eleves['notes'].reduce((acc , val) =>
                acc + val , 0);
   // console.log(sum);
    const moyenne = sommeDesNotes / eleves['notes'].length;
    console.log('ma moyenne est de : '+ moyenne);
    
}