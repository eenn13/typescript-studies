export function isValidWalk(walk: string[]) {
    if (walk.length !== 10) {
      return false;
    }
  
    const northPathsLength = walk.filter((step) => step === "n").length;
    const southPathsLength = walk.filter((step) => step === "s").length;
  
    if (northPathsLength !== southPathsLength) {
      return false;
    }
  
    const westPathsLength = walk.filter((step) => step === "w").length;
    const eastPathsLength = walk.filter((step) => step === "e").length;
  
    if (westPathsLength !== eastPathsLength) {
      return false;
    }
  
    return true;
  }
  
  console.log(isValidWalk([]));
  