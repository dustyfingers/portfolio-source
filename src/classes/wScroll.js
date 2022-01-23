export default class wScroll {

  /**
   * Get current browser viewpane height
   */
  get_window_height() {

    console.log('window height');
    console.log(window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0);

    return window.innerHeight || 
          document.documentElement.clientHeight ||
          document.body.clientHeight || 0;
  }

  /**
  * Get current absolute window scroll position
  */
  get_window_Yscroll() {

    console.log('window y scroll offset');
    console.log(window.pageYOffset || document.body.scrollTop ||document.documentElement.scrollTop || 0);

    return window.pageYOffset || 
          document.body.scrollTop ||
          document.documentElement.scrollTop || 0;
  }

  /**
  * Get current absolute document height
  */
  get_doc_height() {

    console.log('document.body.scrollHeight')
    console.log(document.body.scrollHeight)

    console.log('document height');
    console.log(Math.max(
      document.body.scrollHeight || 0, 
      document.documentElement.scrollHeight || 0,
      document.body.offsetHeight || 0, 
      document.documentElement.offsetHeight || 0,
      document.body.clientHeight || 0, 
      document.documentElement.clientHeight || 0
    ));

    return Math.max(
        document.body.scrollHeight || 0, 
        document.documentElement.scrollHeight || 0,
        document.body.offsetHeight || 0, 
        document.documentElement.offsetHeight || 0,
        document.body.clientHeight || 0, 
        document.documentElement.clientHeight || 0
    );
  }


  /**
  * Get current vertical scroll percentage
  */
  get_scroll_percentage() {
    return ((this.get_window_Yscroll() + this.get_window_height()) / this.get_doc_height()) * 100;
  }
  
}