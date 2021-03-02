import React from 'react'

const NetlifyForm = () => {
  return (
    <div className="mt-5 md:mt-0 md:col-span-2">
      <h2 className="text-center">Contact Form</h2>
      <form
        name="Contact Form"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="shadow-xl w-3xl md:max-w-2xl overflow-hidden mx-auto rounded-lg">
          <div className="px-4 py-5 bg-white dark:bg-paper-500 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500">
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  autoComplete="given-name"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500">
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Last name
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  autoComplete="family-name"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>

              <div className="col-span-6 sm:col-span-4 focus-within:text-cyan-500">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Country / Region
                </label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 dark:border-gray-400 bg-white dark:bg-transparent rounded-md shadow-sm focus:outline-none focus:ring-cyan-500 sm:text-sm"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>

              <div className="col-span-6 focus-within:text-cyan-500">
                <label
                  htmlFor="street_address"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Street address
                </label>
                <input
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2 focus-within:text-cyan-500">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500 lg:col-span-2">
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  State / Province
                </label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 focus-within:text-cyan-500 lg:col-span-2">
                <label
                  htmlFor="postal_code"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  ZIP / Postal
                </label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  className="mt-1 focus:ring-cyan-500 block w-full shadow-sm sm:text-sm border-gray-300 dark:border-gray-400 rounded-md dark:bg-transparent"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 dark:bg-paper-500 text-right sm:px-6 focus-within:text-cyan-500">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 shadow-sm text-sm font-medium rounded-md text-gray-200 hover:text-cyan-500 border border-cyan-500 hover:bg-cyan-500 hover:bg-opacity-20 hover:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NetlifyForm
