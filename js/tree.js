
const drawTree = () => {
      let branches = [];

    // Using the repeat() method
   for (let i = 0; i <= 4; i++) {
        branches.push('\\');
        let starsToAdd = '*'.repeat(i + 1);
        branches[i] += starsToAdd;
        console.log(branches[i]);
      }
 
    
    // Using the nested loop
/*       for (let i = 0; i <= 4; i++) {
        branches.push('\\');
        let starsToAdd = '';
        for (let j = 0; j < i + 1; j++) {
          starsToAdd += '*';
        }
        branches[i] += starsToAdd;
        console.log(branches[i]);
      } */
     } 

     drawTree();

     // another way - using self-invoking anonymous function

     (function() {
      for (let i = 0; i < 5; i++) {
        let branch = '\\' + '*'.repeat(i + 1);
        console.log(branch);
      }
    })()
