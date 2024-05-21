import React, { useEffect, useState } from 'react';
import Modal from '@nitatemic/reactmodal';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/actions';

export default function Form() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const stateSelect = document.getElementById('state');

    states.forEach((state) => {
      const option = document.createElement('option');
      option.value = state.abbreviation;
      option.text = state.name;
      stateSelect.appendChild(option);
    });

    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    if (modalOpen) {
      document.addEventListener('click', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [modalOpen]);

  function saveEmployee() {
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const dateOfBirth = document.getElementById('date-of-birth');
    const startDate = document.getElementById('start-date');
    const department = document.getElementById('department');
    const street = document.getElementById('street');
    const city = document.getElementById('city');
    const state = document.getElementById('state');
    const zipCode = document.getElementById('zip-code');

    /* Check every field is filled */
    if (!firstName.value || !lastName.value || !dateOfBirth.value || !startDate.value || !department.value || !street.value || !city.value || !state.value || !zipCode.value) {
      firstName.classList[firstName.value ? 'remove' : 'add']('is-invalid');

      lastName.classList[lastName.value ? 'remove' : 'add']('is-invalid');

      dateOfBirth.classList[dateOfBirth.value ? 'remove' : 'add']('is-invalid');

      startDate.classList[startDate.value ? 'remove' : 'add']('is-invalid');

      street.classList[street.value ? 'remove' : 'add']('is-invalid');

      city.classList[city.value ? 'remove' : 'add']('is-invalid');

      zipCode.classList[zipCode.value ? 'remove' : 'add']('is-invalid');

      return;
    }

    const employee = {
      firstName: firstName.value,
      lastName: lastName.value,
      dateOfBirth: dateOfBirth.value,
      startDate: startDate.value,
      department: department.value,
      street: street.value,
      city: city.value,
      state: state.value,
      zipCode: zipCode.value,
    };

    dispatch(addEmployee(employee));
    openModal();
  }

  const states = [
    {
      name: 'Alabama',
      abbreviation: 'AL',
    },
    {
      name: 'Alaska',
      abbreviation: 'AK',
    },
    {
      name: 'American Samoa',
      abbreviation: 'AS',
    },
    {
      name: 'Arizona',
      abbreviation: 'AZ',
    },
    {
      name: 'Arkansas',
      abbreviation: 'AR',
    },
    {
      name: 'California',
      abbreviation: 'CA',
    },
    {
      name: 'Colorado',
      abbreviation: 'CO',
    },
    {
      name: 'Connecticut',
      abbreviation: 'CT',
    },
    {
      name: 'Delaware',
      abbreviation: 'DE',
    },
    {
      name: 'District Of Columbia',
      abbreviation: 'DC',
    },
    {
      name: 'Federated States Of Micronesia',
      abbreviation: 'FM',
    },
    {
      name: 'Florida',
      abbreviation: 'FL',
    },
    {
      name: 'Georgia',
      abbreviation: 'GA',
    },
    {
      name: 'Guam',
      abbreviation: 'GU',
    },
    {
      name: 'Hawaii',
      abbreviation: 'HI',
    },
    {
      name: 'Idaho',
      abbreviation: 'ID',
    },
    {
      name: 'Illinois',
      abbreviation: 'IL',
    },
    {
      name: 'Indiana',
      abbreviation: 'IN',
    },
    {
      name: 'Iowa',
      abbreviation: 'IA',
    },
    {
      name: 'Kansas',
      abbreviation: 'KS',
    },
    {
      name: 'Kentucky',
      abbreviation: 'KY',
    },
    {
      name: 'Louisiana',
      abbreviation: 'LA',
    },
    {
      name: 'Maine',
      abbreviation: 'ME',
    },
    {
      name: 'Marshall Islands',
      abbreviation: 'MH',
    },
    {
      name: 'Maryland',
      abbreviation: 'MD',
    },
    {
      name: 'Massachusetts',
      abbreviation: 'MA',
    },
    {
      name: 'Michigan',
      abbreviation: 'MI',
    },
    {
      name: 'Minnesota',
      abbreviation: 'MN',
    },
    {
      name: 'Mississippi',
      abbreviation: 'MS',
    },
    {
      name: 'Missouri',
      abbreviation: 'MO',
    },
    {
      name: 'Montana',
      abbreviation: 'MT',
    },
    {
      name: 'Nebraska',
      abbreviation: 'NE',
    },
    {
      name: 'Nevada',
      abbreviation: 'NV',
    },
    {
      name: 'New Hampshire',
      abbreviation: 'NH',
    },
    {
      name: 'New Jersey',
      abbreviation: 'NJ',
    },
    {
      name: 'New Mexico',
      abbreviation: 'NM',
    },
    {
      name: 'New York',
      abbreviation: 'NY',
    },
    {
      name: 'North Carolina',
      abbreviation: 'NC',
    },
    {
      name: 'North Dakota',
      abbreviation: 'ND',
    },
    {
      name: 'Northern Mariana Islands',
      abbreviation: 'MP',
    },
    {
      name: 'Ohio',
      abbreviation: 'OH',
    },
    {
      name: 'Oklahoma',
      abbreviation: 'OK',
    },
    {
      name: 'Oregon',
      abbreviation: 'OR',
    },
    {
      name: 'Palau',
      abbreviation: 'PW',
    },
    {
      name: 'Pennsylvania',
      abbreviation: 'PA',
    },
    {
      name: 'Puerto Rico',
      abbreviation: 'PR',
    },
    {
      name: 'Rhode Island',
      abbreviation: 'RI',
    },
    {
      name: 'South Carolina',
      abbreviation: 'SC',
    },
    {
      name: 'South Dakota',
      abbreviation: 'SD',
    },
    {
      name: 'Tennessee',
      abbreviation: 'TN',
    },
    {
      name: 'Texas',
      abbreviation: 'TX',
    },
    {
      name: 'Utah',
      abbreviation: 'UT',
    },
    {
      name: 'Vermont',
      abbreviation: 'VT',
    },
    {
      name: 'Virgin Islands',
      abbreviation: 'VI',
    },
    {
      name: 'Virginia',
      abbreviation: 'VA',
    },
    {
      name: 'Washington',
      abbreviation: 'WA',
    },
    {
      name: 'West Virginia',
      abbreviation: 'WV',
    },
    {
      name: 'Wisconsin',
      abbreviation: 'WI',
    },
    {
      name: 'Wyoming',
      abbreviation: 'WY',
    },
  ];

  return (
    <>
      <form action="#" className="" id="create-employee">
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">First Name</label>
          <input type="text" id="first-name" className="form-control" />
          <div className="invalid-feedback">This field cannot be empty</div>
        </div>

        <div className="mb-3">
          <label htmlFor="last-name" className="form-label">Last Name</label>
          <input type="text" id="last-name" className="form-control" />
          <div className="invalid-feedback">This field cannot be empty</div>
        </div>

        <div className="mb-3">
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input id="date-of-birth" className="form-control" type="date" />
          <div className="invalid-feedback">This field cannot be empty</div>
        </div>

        <div className="mb-3">
          <label htmlFor="start-date">Start Date</label>
          <input id="start-date" className="form-control" type="date" />
          <div className="invalid-feedback">This field cannot be empty</div>
        </div>

        <fieldset className="address form-group">
          <legend>Address</legend>
          <div className="mb-3">
            <label htmlFor="street">Street</label>
            <input id="street" className="form-control" type="text" />
            <div className="invalid-feedback">This field cannot be empty</div>
          </div>

          <div className="mb-3">
            <label htmlFor="city">City</label>
            <input id="city" className="form-control" type="text" />
            <div className="invalid-feedback">This field cannot be empty</div>
          </div>

          <div className="mb-3">
            <label htmlFor="state">State</label>
            <select name="state" className="form-select" id="state" />
          </div>

          <div className="mb-3">
            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" className="form-control" pattern="[0-9]{5}" type="text" />
            <div className="invalid-feedback">This field cannot be empty</div>
          </div>
        </fieldset>

        <label htmlFor="department">Department</label>
        <select name="department" className="form-select" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

      </form>
      <button type="submit" className="mt-4 btn btn-primary" onClick={saveEmployee}>Save</button>
      {modalOpen && (
        <Modal isOpen={modalOpen} onClose={closeModal}>
          <h2 className="content-modal">Employee Created!</h2>
          <button type="button" className="mt-4 btn btn-primary" onClick={closeModal}>Close</button>
        </Modal>
      )}
    </>
  );
}
