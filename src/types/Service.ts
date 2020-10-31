interface ServiceInit {
    status: 'init';
  }
  
  interface ServiceLoading {
    status: 'loading';
  }
  
  interface ServiceLoaded {
    status: 'loaded';
    payload: [];
  }
  
  interface ServiceError {
    status: 'error';
    error: Error;
  }
  
  export type Service =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded
    | ServiceError;
  