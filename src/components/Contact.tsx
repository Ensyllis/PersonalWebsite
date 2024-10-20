const Contact = () => {
  return (
    <section className="my-16 p-8 bg-white shadow-lg rounded-xl max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Get in Touch</h2>
      <p className="text-lg text-gray-600 text-center mb-10">
        I'd love to hear from you! Whether you're interested in collaborating, discussing a project, or just saying hello, drop me a message below.
      </p>
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-3 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Your email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-3 w-full h-36 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            placeholder="Your message"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-green-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-green-600 transition duration-300 shadow-lg transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact;
