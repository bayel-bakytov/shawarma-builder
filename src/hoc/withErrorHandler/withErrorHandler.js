import React, { useState, useEffect } from "react";
import Modal from "../../components/UI/Modal/Modal";

const withErrorHandler = (WrappendComponent, axios) => {
  return (props) => {
    const [error, setError] = useState(null);
    function hideModal() {
      setError(false);
    }
    useEffect(() => {
      axios.interceptors.response.use(
        (response) => response,
        (error) => setError(error)
      );
    }, []);

    return (
      <>
        <Modal show={error} hideCallback={hideModal}>
          No signal
        </Modal>
        <WrappendComponent {...props} />;
      </>
    );
  };
};
export default withErrorHandler;
