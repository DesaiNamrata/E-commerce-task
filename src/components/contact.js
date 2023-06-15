import React from "react";

const Contact = () => {
    return (
        <div className="container">
            <div className="py-4">
                <h1>Contact Page</h1>
                <form>
                    <div class="mb-3">
                        <label htmlfor="formGroupExampleInput" class="form-label">Email Address:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" />
                    </div>
                    <div class="mb-3">
                        <label htmlfor="formGroupExampleInput2" class="form-label">Message:</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;