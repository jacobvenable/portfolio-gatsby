export default function(element){
  let windowHeight = window.innerHeight,
    windowScroll = window.scrollY,
    contentTop = element.getBoundingClientRect().top,
    contentHeight = element.clientHeight;

  if(contentTop+contentHeight>windowHeight){
    //all of the expanded content is not currently visible on the screen
    window.scroll({
      top:(contentHeight > windowHeight)?contentTop:(windowScroll+(contentHeight-(windowHeight-contentTop))),
      behavior:"smooth"
    });
  }
}