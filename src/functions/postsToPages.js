export default function postsToPages(postArray, nOnPage){
  let pageArray = [];
  let postsOnPage = [];
  for(let i=1, j=1;i<=postArray.length;i++, j++){
    postsOnPage.push(postArray[i-1]);


    if(i%10===0||i===postArray.length){

      pageArray.push(postsOnPage);
      postsOnPage = [];
    }

  }
  return pageArray
}
