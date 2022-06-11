const findCorrespondingNode = (rootA, rootB, target) => {
    // the two DOM tree is exactly the same, if we find the target in A, then the target must be at 
    // the same position in B
    if (rootA==target){
      return rootB
    }
    else{
      for(let i=0;i<rootA.children.length;i++){
        const res=findCorrespondingNode(rootA.children[i],rootB.children[i],target)
        if (res){
          return res
        }
      }
    }
  }