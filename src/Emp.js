import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Emp = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate('/detail/' + id);
  };
  const LoadEdit = (id) => {
    navigate('/edit/' + id);
  };
  const Removefunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch('http://localhost:5000/employee/' + id, {
        method: 'DELETE',
      })
        .then((res) => {
          alert('Removed successfully.');
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch('http://localhost:5000/employee')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
    let username = window.localStorage.getItem('username');
    if (username === '' || username === null) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="container">
      <div className="card m-3">
        <div className="card-title text-center">
          <h2>Employee Listing</h2>
        </div>
        <div className="card-body">
          <div className="divbtn">
            <Link to="/create" className="btn btn-success">
              Add New (+)
            </Link>
            <Link to="/" className="btn m-2 btn-danger">
              Back
            </Link>
          </div>
          <table className="table table-bordered">
            <thead className="bg-dark text-white">
              <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Phone</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {empdata &&
                empdata.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>
                      <a
                        onClick={() => {
                          LoadEdit(item.id);
                        }}
                        className="btn btn-success"
                      >
                        Edit
                      </a>
                      <a
                        onClick={() => {
                          Removefunction(item.id);
                        }}
                        className="btn btn-danger"
                      >
                        Remove
                      </a>
                      <a
                        onClick={() => {
                          LoadDetail(item.id);
                        }}
                        className="btn btn-primary"
                      >
                        Details
                      </a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Emp;
