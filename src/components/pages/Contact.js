import React from 'react';

export default function Contact() {
  return (
<div class="container box p-6 has-background-light">
      <h1 class="title has-text-centered">
        Contact Me
      </h1>
      <h2 class="subtitle has-text-centered">
        Please fill out the form to get in touch...
      </h2>
      <form action="">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" type="text"
                   placeholder="Enter your name" />
          </div>
        </div>  

  
        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input is-danger" type="email" placeholder="Enter your email"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>
  
        <div class="field">
          <label class="label">
            Message...
          </label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Please enter your message here!"
            ></textarea>
          </div>
        </div> 

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-success">
              Sign up
            </button>
          </div>
          <div class="control">
            <button class="button is-link is-light">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
