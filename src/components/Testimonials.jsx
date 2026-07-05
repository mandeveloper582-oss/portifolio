import { testimonials } from "../data/Testimonials";
import { FaStar } from "react-icons/fa";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#050816]"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-blue-500 uppercase tracking-widest font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What Clients Say
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Feedback from clients and collaborators who have worked with me.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((client) => (

            <div
              key={client.id}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8 hover:border-blue-500 transition-all duration-300"
            >

              <img
                src={client.image}
                alt={client.name}
                loading="lazy"
                decoding="async"
                className="w-20 h-20 rounded-full object-cover object-center border-2 border-blue-500"
              />

              <h3 className="text-2xl font-bold mt-6">
                {client.name}
              </h3>

              <p className="text-blue-400">
                {client.position}
              </p>

              <p className="text-gray-500">
                {client.company}
              </p>

              <div className="flex gap-1 mt-5">

                {[...Array(client.rating)].map((_, index) => (

                  <FaStar
                    key={index}
                    className="text-yellow-400"
                  />

                ))}

              </div>

              <p className="text-gray-400 leading-8 mt-6">
                "{client.review}"
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;