import React from "react"


const Projects = () => {
  const dummyData = [
    {
      image: 'https://via.placeholder.com/386x200',
      daysLeft: 5,
      title: 'Flipkart Grid 6.0',
      estimatedRange: '15000 - 20000',
      tags: ['UI/UX', 'Web Development']
    },
    {
      image: 'https://via.placeholder.com/386x200',
      daysLeft: 7,
      title: 'Amazon Innovation Challenge',
      estimatedRange: '18000 - 25000',
      tags: ['Backend', 'AI/ML']
    },
    {
      image: 'https://via.placeholder.com/386x200',
      daysLeft: 3,
      title: 'Google Developer Challenge',
      estimatedRange: '20000 - 30000',
      tags: ['Cloud Computing', 'Frontend']
    },
    {
      image: 'https://via.placeholder.com/386x200',
      daysLeft: 3,
      title: 'Google Developer Challenge',
      estimatedRange: '20000 - 30000',
      tags: ['Cloud Computing', 'Frontend']
    },
    {
      image: 'https://via.placeholder.com/386x200',
      daysLeft: 3,
      title: 'Google Developer Challenge',
      estimatedRange: '20000 - 30000',
      tags: ['Cloud Computing', 'Frontend']
    },
    {
      image: 'https://via.placeholder.com/386x200',
      daysLeft: 3,
      title: 'Google Developer Challenge',
      estimatedRange: '20000 - 30000',
      tags: ['Cloud Computing', 'Frontend']
    } 
  ];

  return (
    <div className="grid grid-cols-1 gap-8 p-6 bg-gray-100 sm:grid-cols-2 lg:grid-cols-3  mt-24">
      {dummyData.map((project, index) => (
        <article
          key={index}
          className="flex flex-col grow shrink pb-6 bg-white rounded-3xl shadow-lg w-full"
        >
          <header className="w-full bg-neutral-200">
            <img
              loading="lazy"
              src={project.image}
              alt={`Project ${project.title}`}
              className="object-contain w-full aspect-[1.96]"
            />
          </header>
          <div className="px-6 mt-4">
            <div className="flex justify-between items-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src="https://via.placeholder.com/24"
                  alt=""
                  className="w-6"
                />
                <span>{project.daysLeft} Days Left</span>
              </div>
            </div>

            <h2 className="mt-3 text-lg font-semibold">{project.title}</h2>
            <p className="mt-1 text-sm text-gray-600">
              Estimated: ₹{project.estimatedRange}
            </p>

            <div className="flex flex-wrap gap-3 mt-4 text-xs font-medium text-gray-600">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gray-200 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Projects