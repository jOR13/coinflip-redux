import React from 'react';

const EditarProducto = () => {
    return (
        <div>
           <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit
                        </h2>

                        <form>
                            <div className="form-group">
                               <label>Bet</label> 
                               <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Amount"
                                    name="amount"
                               />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default EditarProducto;
