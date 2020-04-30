import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappendComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    function hideModal() {
      setError(false);
    }
    useEffect(() => {
      const requestInterceptor = axios.interceptors.request.use((response) => {
        setError(false);
        return response;
      });
      const responseInterceptor = axios.interceptors.response.use(
        (response) => response,
        (error) => setError(error)
      );
      return () => {
        axios.interceptors.request.detach(requestInterceptor);
        axios.interceptors.response.detach(responseInterceptor);
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
