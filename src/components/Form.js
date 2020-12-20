import React, { useState } from "react";

const Form = () => {

  const [people, setPeople] = useState([]);
  const [formData, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...formData, [name]: value });
 
   
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
   setPeople([...people, formData]);
   setData({ firstName: "", lastName: "", email: "" });
   
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <section className="title--section">
          <h2>
            create an account to view <span> this page</span>
          </h2>
        </section>
        <article className="have--account">
          <p>
            already have an account
            <a href="#" target="_blank" rel="noopener noreferrer">
              log in
            </a>
          </p>
        </article>

        <section className="input--container">
          <section className="first--name">
            <label htmlFor="firstName">firstname</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            
          </section>
          <section className="last--name">
            <label htmlFor="lastName">lastname</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </section>
        </section>
        <section className="email--section">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </section>
        <article className="privacy--policy">
          <p>
            by our privacy policy
            <a href="#" target="_blank" rel="noopener noreferrer">
              terms
            </a>
            and{" "}
            <a href="#" target="_blank" rel="noopener noreferrer">
              conditions
            </a>
          </p>
        </article>
        <input type="submit" value="submit" />

        <section className="social--media--section">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            id="facebook--link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            id="twitter--link"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
          </a>
        </section>
        <section className="close--button">
          <button id="close--button">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#4A5568"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </section>
      </form>
    </>
  );
};

export { Form };
