
const drawTree = () => {
    // Hardcode
    /*    let branches = ['\\*', '\\**', '\\***', '\\****', '\\*****'];
      
      for (let branch of branches) {
          console.log(branch)
        }

    // OR
        branches.forEach(branch => console.log(branch));
    */
    
    // Is it ok?
      let branches = [];
      
      for (let i = 0; i <= 4; i++) {
        branches.push('\\');
        let starsToAdd = '*'.repeat(i + 1);
        branches[i] += starsToAdd;
        console.log(branches[i]);
      }
     }

     drawTree();
