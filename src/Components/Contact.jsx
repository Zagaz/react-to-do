import React from 'react';
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import './Contact.css';

const Contact = ({ index, id, name, email, remove, edit }) => {
  return (
    <div className="container contact-list-item py-2 border-bottom mb-3">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <div className="d-flex align-items-center flex-grow-1 flex-wrap">
          <div className="me-4 d-flex align-items-center">
            <FaUser className="me-2" />
            <span>{name}</span>
          </div>
          <div className="me-4 d-flex align-items-center">
            <MdEmail className="me-2" />
            <span>{email}</span>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 mt-2 mt-md-0">
          <button className="btn btn-info btn-sm" onClick={edit}>
            <FaRegEdit />
          </button>
          <button className="btn btn-danger btn-sm" onClick={remove}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
