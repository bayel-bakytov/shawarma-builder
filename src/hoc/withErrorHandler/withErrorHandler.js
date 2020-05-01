import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappendComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    function hideModal() {
      setError(false);
    }
    const requestInterceptor = axios.interceptors.request.use((response) => {
      setError(false);
      return response;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => setError(error)
    );
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, []);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          {error ? error.message : "Unknown error"}
        </Modal>
        <WrappendComponent {...props} />;
      </>
    );
  };
};
export default withErrorHandler;
